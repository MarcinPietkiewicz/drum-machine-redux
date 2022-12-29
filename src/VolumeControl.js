import React from "react";
import "./VolumeControl.css";


class VolumeControl extends React.Component {
  constructor(props) {
    super(props);
    this.changeVolume = this.changeVolume.bind(this);
  }

  changeVolume(event) {
    const volume = event.target.value;
    const volumeText = "Volume: " + volume;
    this.props.updateVolume(volume/100, volumeText);
  }

  render() {
    return (
      <div className="volume-control">
        <input type="range" min="0" max="100" defaultValue="100" className="volumeSlider" onChange={this.changeVolume}/>
      </div>
    );
  }
}

export default VolumeControl;
