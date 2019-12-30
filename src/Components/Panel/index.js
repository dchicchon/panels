import React from "react";
// import "./style.css";

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
      red: Math.floor(Math.random() * 250 - 50) + 50,
      green: Math.floor(Math.random() * 250 - 50) + 50,
      blue: Math.floor(Math.random() * 250 - 50) + 50,
      increasing: true,
      increment: null,
      // Time in seconds
      time: 3,
      pause: false
    };
  }

  // MAIN ISSUE:
  // Eventually each panel turn completely white or black, I do not want to happen. I want them to each fluctuate eventually.
  // Maybe I can set a state of fluctuating like increasing or decreasing

  // SOLUTION:
  // Added state for increasing and decreasing depending on the value of the states of rgb
  // In its current state, I really like this project. I want to start building some random functionality as well for it

  // Also create an interval that will go through the colors, every 10 seconds maybe
  componentDidMount() {
    // Initial setState
    this.setState({
      pause: this.props.pause,
      increment: this.props.increment,
      size: this.props.size,
      time: this.props.time
    });

    let time = Math.floor(Math.random() * (this.props.time * 1000)) + 1000;
    this.colorTime = setInterval(() => {
      // Here are the pigments
      let newRed = this.state.red;
      let newGreen = this.state.green;
      let newBlue = this.state.blue;
      if (newRed <= 25 || newGreen <= 25 || newBlue <= 25) {
        this.setState({
          increasing: true
        });
      } else if (newRed >= 225 || newGreen >= 225 || newBlue >= 225) {
        this.setState({
          increasing: false
        });
      }

      if (this.state.increasing) {
        this.setState({
          red: newRed + this.props.increment,
          green: newGreen + this.props.increment,
          blue: newBlue + this.props.increment
        });
      } else {
        this.setState({
          red: newRed - this.props.increment,
          green: newGreen - this.props.increment,
          blue: newBlue - this.props.increment
        });
      }
    }, time);
  }

  componentWillUnmount() {
    clearInterval(this.colorTime);
  }

  // Play/Pause now works but takes a couple of seconds to start again
  // componentDidUpdate(prevProps, prevState, snapshot)
  componentDidUpdate(prevProps, prevState) {
    // If we state newRed, newGreen, and newBlue out here, it gets goofed. Dont do

    // Make this code more efficient later on, lots of repetitive code.
    // make into function(pause = {this.state.pause},time = {this.state.time},increment={this.state.increment},size={this.state.size},colorVal={this.state.colorVal}) {
    //
    // }

    if (this.props.pause !== prevProps.pause) {
      this.setState({
        pause: this.props.pause
      });
      if (this.props.pause === true) {
        console.log("Paused");
        clearInterval(this.colorTime);
      } else {
        console.log("Play");
        let time = Math.floor(Math.random() * (this.state.time * 1000)) + 1000;
        this.colorTime = setInterval(() => {
          // Here are the pigments
          let newRed = this.state.red;
          let newGreen = this.state.green;
          let newBlue = this.state.blue;
          if (newRed <= 25 || newGreen <= 25 || newBlue <= 25) {
            this.setState({
              increasing: true
            });
          } else if (newRed >= 225 || newGreen >= 225 || newBlue >= 225) {
            this.setState({
              increasing: false
            });
          }

          if (this.state.increasing) {
            this.setState({
              red: newRed + this.state.increment,
              green: newGreen + this.state.increment,
              blue: newBlue + this.state.increment
            });
          } else {
            this.setState({
              red: newRed - this.state.increment,
              green: newGreen - this.state.increment,
              blue: newBlue - this.state.increment
            });
          }
        }, time);
      }
    }

    if (this.props.time !== prevProps.time) {
      this.setState({
        time: this.props.time
      });
      clearInterval(this.colorTime);
      let time = Math.floor(Math.random() * (this.props.time * 1000)) + 1000;
      this.colorTime = setInterval(() => {
        // Here are the pigments
        let newRed = this.state.red;
        let newGreen = this.state.green;
        let newBlue = this.state.blue;
        if (newRed <= 25 || newGreen <= 25 || newBlue <= 25) {
          this.setState({
            increasing: true
          });
        } else if (newRed >= 225 || newGreen >= 225 || newBlue >= 225) {
          this.setState({
            increasing: false
          });
        }

        if (this.state.increasing) {
          this.setState({
            red: newRed + this.state.increment,
            green: newGreen + this.state.increment,
            blue: newBlue + this.state.increment
          });
        } else {
          this.setState({
            red: newRed - this.state.increment,
            green: newGreen - this.state.increment,
            blue: newBlue - this.state.increment
          });
        }
      }, time);
    }

    // Dont know if this works, goes for a couple of seconds and then clears the interval
    if (this.props.increment !== prevProps.increment) {
      let newIncrement = parseInt(this.props.increment);

      this.setState({
        increment: newIncrement
      });
      clearInterval(this.colorTime);
      let time = Math.floor(Math.random() * (this.state.time * 1000)) + 1000;
      this.colorTime = setInterval(() => {
        // Here are the pigments
        let newRed = this.state.red;
        let newGreen = this.state.green;
        let newBlue = this.state.blue;
        if (newRed <= 25 || newGreen <= 25 || newBlue <= 25) {
          this.setState({
            increasing: true
          });
        } else if (newRed >= 225 || newGreen >= 225 || newBlue >= 225) {
          this.setState({
            increasing: false
          });
        }

        if (this.state.increasing) {
          this.setState({
            red: newRed + this.state.increment,
            green: newGreen + this.state.increment,
            blue: newBlue + this.state.increment
          });
        } else {
          this.setState({
            red: newRed - this.state.increment,
            green: newGreen - this.state.increment,
            blue: newBlue - this.state.increment
          });
        }
      }, time);
    }

    if (this.props.size !== prevProps.size) {
      this.setState({
        size: this.props.size
      });
    }

    // COLORS
    // =======================

    // This needs a submit button in the parent component. But I dont want this to change immediately on state change. Only on submission from the parent component
    if (this.props.red !== prevProps.red) {
      console.log(this.props.red);
      this.setState({
        red: this.props.red
      });
    }

    if (this.props.green !== prevProps.green) {
      console.log(this.props.green);
      this.setState({
        green: this.props.green
      });
    }

    if (this.props.blue !== prevProps.blue) {
      console.log(this.props.blue);
      this.setState({
        blue: this.props.blue
      });
    }
    // =======================
  }

  render() {
    return (
      <div
        className="panel"
        style={{
          backgroundColor: `rgb(${this.state.red},${this.state.green},${this.state.blue})`,
          // Might change this to rem later
          width: this.state.size,
          height: this.state.size,
          border: "1px solid black"
        }}
      ></div>
    );
  }
}

export default Panel;
