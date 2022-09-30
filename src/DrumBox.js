import React from "react";
import styles from "./DrumBox.css";

class DrumBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">

            <div className="drum-pad" id=""></div>

        
        
        </div>
      </div>
    );
  }
}

export default DrumBox;
