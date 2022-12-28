import React from "react";
import "./App.css";
import DrumBox from "./DrumBox";
import DisplayInstrument from "./DisplayInstrument";
import DisplayPower from "./DisplayPower";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: "" };
    this.timerRef = React.createRef();
    this.updateDisplay = this.updateDisplay.bind(this);
    console.log(this.timerRef.current);
  }

  updateDisplay = (text) => {
    if (this.timerRef.current == null) {
      this.setDisplayTimer(text);
    } else {
      clearTimeout(this.timerRef.current);
      this.setDisplayTimer(text);
    }
  };

  setDisplayTimer(text) {
    this.setState({ display: text });
    this.timerRef.current = setTimeout(() => {
      this.setState({ display: "" });
    }, 1000);
  }

  render() {
    return (
      <div id="center-container">
        <div className="glow" id="drum-machine">
          <div id="header">Drum Machine Redux</div>
          <DrumBox upDisplay={this.updateDisplay} />
          <DisplayInstrument display={this.state.display} />
          <DisplayPower />
        </div>
      </div>
    );
  }
}

export default App;
