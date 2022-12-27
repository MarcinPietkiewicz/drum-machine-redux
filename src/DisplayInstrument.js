import React from "react";

class DisplayInstrument extends React.Component {
  render() {
    return (
        <div id="display-instrument">{this.props.display}</div>
    );
  }
}

export default DisplayInstrument;
