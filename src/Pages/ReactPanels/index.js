import React from "react";
import "./style.css";

import Panel from "../../Components/Panel";

class ReactPanels extends React.Component {
  constructor() {
    super();
    this.state = {
      panelsWidth: "",
      panelsHeight: "",
      reload: true,
      size: 40,
      red: "",
      green: "",
      blue: "",
      pause: false,
      time: 5,
      increment: 25
    };
  }

  componentDidMount() {
    // Check the screen width
    this.setState({
      panelsWidth: Math.floor(window.screen.width / this.state.size),
      panelsHeight: Math.floor(window.screen.height / this.state.size)
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.size !== prevState.size) {
      this.setState({
        panelsWidth: Math.floor(window.screen.width / this.state.size),
        panelsHeight: Math.floor(window.screen.height / this.state.size)
      });
    }
  }

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  renderPanels = () => {
    let panelArr = [];
    for (let i = 0; i < this.state.panelsHeight; i++) {
      let row = [];
      for (let j = 0; j < this.state.panelsWidth; j++) {
        row.push(
          <Panel
            size={this.state.size}
            red={this.state.red}
            green={this.state.green}
            blue={this.state.blue}
            pause={this.state.pause}
            increment={this.state.increment}
            time={this.state.time}
            key={j}
          />
        );
      }
      panelArr.push(
        <div className="row" key={i}>
          {row}
        </div>
      );
    }
    return panelArr;
  };

  controlPause = () => {
    this.setState({
      pause: !this.state.pause
    });
  };

  // This does not do as expected. Actually sets a theme for all of the panels
  random = () => {
    this.setState({
      size: 40,
      pause: false,
      time: 5,
      increment: 25,
      red: Math.floor(Math.random() * 250 - 50) + 50,
      green: Math.floor(Math.random() * 250 - 50) + 50,
      blue: Math.floor(Math.random() * 250 - 50) + 50
    });
  };

  reset = () => {
    console.log("Reset Page");
  };
  render() {
    return (
      <div id="canvas">
        <div id="control">
          <h3>Control Panel</h3>

          {/* Instead of there just being one option,  I would like there to be multiple color option inputs */}
          <label htmlFor="red">
            Red
            <input
              onChange={this.handleChange}
              value={this.state.red}
              name="red"
            />
          </label>
          <label htmlFor="green">
            Green
            <input
              onChange={this.handleChange}
              value={this.state.green}
              name="green"
            />
          </label>
          <label htmlFor="blue">
            blue
            <input
              onChange={this.handleChange}
              value={this.state.blue}
              name="blue"
            />
          </label>
          <label htmlFor="time">
            Time (1-10)
            <input
              type="range"
              min="1"
              max="10"
              name="time"
              value={this.state.time}
              onChange={this.handleChange}
              step="1"
            />
          </label>
          <label html="increment">
            Color Change Increment
            <input
              type="range"
              min="10"
              max="40"
              name="increment"
              id="increment"
              value={this.state.increment}
              onChange={this.handleChange}
              step="5"
            />
          </label>
          <label htmlFor="size">
            Size
            <input
              type="range"
              min="15"
              max="75"
              step="5"
              name="size"
              id="size"
              value={this.state.size}
              onChange={this.handleChange}
            />
          </label>

          {this.state.pause ? (
            <button onClick={this.controlPause}>Play</button>
          ) : (
            <button onClick={this.controlPause}>Pause</button>
          )}
          <button onClick={this.random}>Random</button>
          {/* Would like to create a reset button at some point */}
          <button onClick={this.reset}>Reset</button>
        </div>

        <div id="panels">{this.renderPanels()}</div>
      </div>
    );
  }
}

export default ReactPanels;
