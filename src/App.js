import React from "react";
import "./App.css";
import DrumBox from "./DrumBox";
import DisplayInstrument from "./DisplayInstrument";
import DisplayPower from './DisplayPower';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: "" };
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay = (clipId) => {
    this.setState({ display: clipId });
  };

  render() {
    return (
      <div id="center-container">
        <div className="glow" id="drum-machine">
          <div id="header">Drum Machine Redux</div>
          <DrumBox upDisplay={this.updateDisplay} />
          <DisplayInstrument display={this.state.display}/>
          <DisplayPower />
        </div>
      </div>
    );
  }
}

export default App;
