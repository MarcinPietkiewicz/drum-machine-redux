import React from "react";
import "./App.css";
import DrumBox from "./DrumBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App" id="drum-machine">
        <DrumBox />
        <div id="display">display</div>
      </div>
    );
  }
}

export default App;
