import React from "react";

class DisplayPower extends React.Component {
  constructor(props) {
    super(props);

    this.animateLights = this.animateLights.bind(this);
  }

  animateLights() {
    let lights = document.getElementById("drum-machine");
    let button = document.getElementById("power-button");
    if (button.classList.contains("power-on")) {
        console.log('containes power-on')
      lights.className = "glow";
      button.className = "power-off";
      button.innerHTML = "PWR<br>OFF";
    } else {
        console.log('else');
      lights.className = "glow anim-start";
      button.className = "power-on";
      button.innerHTML = "PWR<br>ON";
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="display-power"></div>
        <button id="power-button" className="power-off" onClick={this.animateLights}>
          PWR<br></br>OFF
        </button>
      </React.Fragment>
    );
  }
}

export default DisplayPower;
