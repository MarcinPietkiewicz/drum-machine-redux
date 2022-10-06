import React from "react";

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>{this.props.id}</div>
        )
    }
}

export default DrumPad;
