import React from "react";

class DisplayPower extends React.Component {
  constructor(props) {
    super(props);
    this.powerUpDrumBox = this.powerUpDrumBox.bind(this);
  }

  powerUpDrumBox() {
    let lights = document.getElementById("drum-machine");
    let button = document.getElementById("power-button");
    let buttonIcon = document.getElementById("power-icon");
    let title = document.getElementById("header");
    if (button.classList.contains("power-on")) {
      lights.className = "glow";
      button.className = "power-off";
      buttonIcon.className = "";
      title.className = "";
      this.props.powerSwitch('Goodbye', true);

    } else {
      lights.className = "glow anim-start";
      button.className = "power-on";
      buttonIcon.className = "power-icon-on";
      title.className = "active-logo";
      this.props.powerSwitch('Hello', true);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="display-power"></div>
        <button id="power-button" className="power-off" onClick={this.powerUpDrumBox}>
          <img id="power-icon" src="assets/pwr.svg" alt="power button" />
        </button>
      </React.Fragment>
    );
  }
}

export default DisplayPower;
