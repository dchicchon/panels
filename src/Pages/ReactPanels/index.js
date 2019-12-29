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
      colorChoice: "red",
      colorVal: "",
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

  render() {
    return (
      <div id="canvas">
        <div id="control">
          <h3>Control Panel</h3>
          <label htmlFor="color">
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
          <label htmlFor="colorVal">
            Value (1-255)
            <input
              id="colorVal"
              name="colorVal"
              value={this.state.colorVal}
              onChange={this.handleChange}
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
        </div>

        <div id="panels">{this.renderPanels()}</div>
      </div>
    );
  }
}

export default ReactPanels;
