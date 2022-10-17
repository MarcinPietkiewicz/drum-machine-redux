import React from "react";
import "./App.css";
import DrumBox from "./DrumBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: "click any button..." };
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay = (clipId) => {
    this.setState({ display: clipId });
  };

  render() {
    return (
      <div id="center-container">
        <div className="App" id="drum-machine">
          <div id="header">The Drum Machine</div>
          <DrumBox upDisplay={this.updateDisplay} />
          <div id="display">{this.state.display}</div>
        </div>
      </div>
    );
  }
}

export default App;
