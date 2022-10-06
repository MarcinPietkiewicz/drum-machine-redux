import React from "react";

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='drum-pad' id={this.props.clipId} >
                <audio className='clip' id={this.props.keyTrigger} src={this.props.clip} />
                {this.props.keyTrigger}
            </div>
        )
    }
}

export default DrumPad;
