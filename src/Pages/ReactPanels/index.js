import React from "react";
import "./style.css";

import Panel from "../../Components/Panel";

class ReactPanels extends React.Component {
  state = {
    panelsWidth: "",
    panelsHeight: "",
    colorChoice: "red",
    colorVal: "",
    pause: false,
    time: 5,
    increment: 25
  };

  componentDidMount() {
    // Check the screen width
    this.setState({
      panelsWidth: Math.floor(window.screen.width / 50),
      panelsHeight: Math.floor(window.screen.height / 50)
    });
  }

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // Let there be rows of panels
  renderPanels = () => {
    let panelArr = [];
    for (let i = 0; i < this.state.panelsHeight; i++) {
      let row = [];
      for (let j = 0; j < this.state.panelsWidth; j++) {
        row.push(
          <Panel
            colorChoice={this.state.colorChoice}
            colorVal={this.state.colorVal}
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

  submitColor = () => {
    console.log("Change initial color");
  };

  render() {
    return (
      <div id="canvas">
        <div id="control">
          <h3>Control Panel</h3>
          <form onSubmit={this.submitColor}>
            <label>
              Color
              <select
                value={this.state.colorChoice}
                onChange={this.handleChange}
                name="colorChoice"
              >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select>
            </label>
            <label htmlFor="value">
              Initial Value (1-255)
              <input
                name="colorVal"
                value={this.state.colorVal}
                onChange={this.handleChange}
              />
            </label>
          </form>
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
              value={this.state.increment}
              onChange={this.handleChange}
              step="5"
            />
          </label>

          {this.state.pause ? (
            <button onClick={this.controlPause}>Play</button>
          ) : (
            <button onClick={this.controlPause}>Pause</button>
          )}
        </div>
        {this.renderPanels()}
      </div>
    );
  }
}

export default ReactPanels;
