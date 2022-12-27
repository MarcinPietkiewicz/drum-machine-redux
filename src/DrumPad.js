import React from "react";
import styles from "./DrumPad.css";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: "inactive",
    };
    this.playSoundAndHighlight = this.playSoundAndHighlight.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.highlightButton = this.highlightButton.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  playSoundAndHighlight() {
    const sound = document.getElementById(this.props.keyTrigger);
    this.highlightButton();
    this.updateDisplay(this.props.clipId);
    sound.currentTime = 0;
    sound.play();
  }

  updateDisplay = (soundName) => {
    this.props.upDisplay(soundName);
  };

  highlightButton() {
    this.setState({ padStyle: "active" });
    setTimeout(() => this.setState({ padStyle: "inactive" }), 150);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSoundAndHighlight();
    }
  }

  render() {
    return (
      <div className={`drum-pad ${this.state.padStyle}`} id={this.props.clipId} onClick={this.playSoundAndHighlight}>
        <audio className="clip" id={this.props.keyTrigger} src={this.props.clip} />
        {this.props.keyTrigger}
      </div>
    );
  }
}

export default DrumPad;
