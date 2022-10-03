import React from "react";
import styles from "./DrumPad.css";

class DrumBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="drum-pad" id="Q">Q</div>
        <div className="drum-pad" id="W">W</div>
        <div className="drum-pad" id="E">E</div>
        <div className="drum-pad" id="A">A</div>
        <div className="drum-pad" id="S">S</div>
        <div className="drum-pad" id="D">D</div>
        <div className="drum-pad" id="Z">Z</div>
        <div className="drum-pad" id="X">X</div>
        <div className="drum-pad" id="C">C</div>
      </React.Fragment>
    );
  }
}

export default DrumBox;
