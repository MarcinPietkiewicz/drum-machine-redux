import React from "react";
import "./App.css";
import DrumPad from "./DrumPad";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App" id="drum-machine">
        <DrumPad />
        <div id="display">display</div>
      </div>
    );
  }
}

export default App;
