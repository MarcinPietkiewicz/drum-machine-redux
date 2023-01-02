import "./DrumPad.css";
import React, { useState } from "react";

function DrumPad(props) {
  const [state, setState] = useState("inactive");

  function componentDidMount() {
    document.addEventListener("keydown", handleKeyPress);
  }

  function componentWillUnmount() {
    document.removeEventListener("keydown", handleKeyPress);
  }

  function playSoundAndHighlight() {
    if (props.power === true) {
      const sound = document.getElementById(props.keyTrigger);
      highlightButton();
      updateDisplay(props.clipId);
      sound.currentTime = 0;
      sound.volume = props.volume;
      sound.play();
    }
  }

  function updateDisplay(soundName) {
    props.upDisplay(soundName);
  }

  function highlightButton() {
    console.log('highlighting button');
    setState("active");
    setTimeout(() => {
      console.log('setting inactive');
      setState("inactive")}, 150);
  }

  function handleKeyPress(e) {
    if (e.keyCode === props.keyCode) {
      console.log('key code is right');
      this.playSoundAndHighlight();
    }
  }

  return (
    <div className={`drum-pad ${state}`} id={props.clipId} onClick={playSoundAndHighlight}>
      <audio className="clip" id={props.keyTrigger} src={props.clip} />
      {props.keyTrigger}
    </div>
  );
}

export default DrumPad;
