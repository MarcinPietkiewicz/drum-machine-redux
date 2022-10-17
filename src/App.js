import React from "react";
import "./App.css";
import DrumBox from "./DrumBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: 'starting...'};
  }

  render() {
    return (
      <div className="App" id="drum-machine">
        <div id="header">The Drum Machine</div>
        <DrumBox />
        <div id="display">{this.state.display}</div>
      </div>
    );
  }
}

export default App;
