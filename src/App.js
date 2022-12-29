import React from "react";
import "./App.css";
import DrumBox from "./DrumBox";
import Display from "./Display";
import PowerButton from "./PowerButton";
import VolumeControl from "./VolumeControl";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: "", power: false, volume: 1 };
    this.timerRef = React.createRef();
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  componentDidMount() {
    this.updateDisplay("Click power button to start", false, 4000);
  }

  updateDisplay = (text, powerClick = false, time = 1000) => {
    if (this.timerRef.current == null) {
      this.setDisplayTimer(text, time);
      if (powerClick === true) {
        this.setState({power: !this.state.power})
      }
    } else {
      clearTimeout(this.timerRef.current);
      this.setDisplayTimer(text, time);
      if (powerClick === true) {
        this.setState({power: !this.state.power})
      }
    }
  };

  updateVolume = (volume, volumeText) => {
    this.updateDisplay(volumeText);
    this.setState({volume: volume})

  }

  setDisplayTimer(text, time = 1000) {
    this.setState({ display: text });
    this.timerRef.current = setTimeout(() => {
      this.setState({ display: "" });
    }, time);
  }

  render() {
    return (
      <div id="center-container">
        <div className="glow" id="drum-machine">
          <div id="header">Drum Machine Redux</div>
          <DrumBox upDisplay={this.updateDisplay} power={this.state.power} volume={this.state.volume}/>
          <Display display={this.state.display} />
          <VolumeControl volume={this.state.volume} updateVolume={this.updateVolume} />
          <PowerButton powerSwitch={this.updateDisplay}/>
        </div>
      </div>
    );
  }
}

export default App;
