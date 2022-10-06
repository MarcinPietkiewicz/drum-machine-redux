import React from "react";

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.playSound = this.playSound.bind(this)
    }

    playSound() {
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.play();
        setTimeout(() => this.activatePad(), 100);
    }

    render() {
        return (
            <div className='drum-pad' id={this.props.clipId} onClick={this.playSound} >
                <audio className='clip' id={this.props.keyTrigger} src={this.props.clip} />
                {this.props.keyTrigger}
            </div >
        )
    }
}

export default DrumPad;
