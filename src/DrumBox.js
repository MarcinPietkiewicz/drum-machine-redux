import React from "react";
import styles from "./DrumBox.css";
import DrumPad from './DrumPad';

class DrumBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <DrumPad id="Q" clipId={'Heater-1'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'} keyCode={81} keyTrigger={'Q'} />
        <DrumPad id="W" clipId={'Heater-2'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'} keyCode={87} keyTrigger={'W'} />
        <DrumPad id="E" clipId={'Heater-3'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'} keyCode={69} keyTrigger={'E'} />
        <DrumPad id="A" clipId={'Heater-4'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'} keyCode={65} keyTrigger={'A'} />
        <DrumPad id="S" clipId={'Clap'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'} keyCode={83} keyTrigger={'S'} />
        <DrumPad id="D" clipId={'Open-HH'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'} keyCode={68} keyTrigger={'D'} />
        <DrumPad id="Z" clipId={'Kick-n-hat'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'} keyCode={90} keyTrigger={'Z'} />
        <DrumPad id="X" clipId={'Kick'} clip={'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'} keyCode={88} keyTrigger={'X'} />
        <DrumPad id="C" clipId={'Closed-HH'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'} keyCode={67} keyTrigger={'C'} />
      </React.Fragment>
    );
  }
}

export default DrumBox;
