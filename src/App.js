import React from "react";
import "./App.css";
import DrumBox from "./DrumBox";
import Display from "./Display";

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
        <div className="App" id="drum-machine">
          <div id="header">Drum Machine Redux</div>
          <DrumBox upDisplay={this.updateDisplay} />
          <Display display={this.state.display}/>
        </div>
      </div>
    );
  }
}

export default App;
