import React from "react";
import styles from "./DrumPad.css";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        padStyle: 'inactive'
    }
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.highlightButton = this.highlightButton.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  playSound() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.highlightButton();
  }

  highlightButton() {
    this.setState({ padStyle: 'active'})
    setTimeout(() => this.setState({padStyle: 'inactive'}), 150)
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  render() {
    return (
      <div className={`drum-pad ${this.state.padStyle}`} id={this.props.clipId} onClick={this.playSound}>
        <audio className="clip" id={this.props.keyTrigger} src={this.props.clip} />
        {this.props.keyTrigger}
      </div>
    );
  }
}

export default DrumPad;
