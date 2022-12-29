import React from "react";

class VolumeControl extends React.Component {
constructor(props){
    super(props)
    this.changeVolume = this.changeVolume.bind(this);
}

changeVolume(){
    const volume = 0.5;
    const volumeText = 'Volume: '+volume*100;
    this.props.updateVolume(volume, volumeText);
}

render(){
    return (
        <div className="volume-control">
            {this.props.volume*100}
            <button onClick={this.changeVolume}>Vol</button>
        </div>
    )
}

}



export default VolumeControl;