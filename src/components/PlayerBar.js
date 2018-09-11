import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import "../Styles/PlayerBar.css"

const playerBarBG = {
  backgroundColor: "rgb(190,190,210)",
  width: "22vw",
  marginLeft: "Auto",
  marginRight: "Auto",
  fontSize: "1vw",
  height: "9.5vw"
}

const songSelectButton = {
   backgroundColor: "rgb(75, 38, 94)",
   width: "3vw",
   height: "2.5vw",
   border: "none",
   marginRight: ".2vw",
}

const songPlayButton = {
     backgroundColor: "rgb(160,121,179)",
     width: "3vw",
     height: "2.5vw",
     border: "none",
     marginRight: ".2vw",
}


class PlayerBar extends Component {
  render() {
    return (
      <section style={playerBarBG} className="player-bar">
        <section id="buttons" >
            <button id="previous" onClick={ this.props.handlePrevClick } style={ songSelectButton }>
                <Ionicon icon="ios-skip-backward" className="ion-skip-backward" fontSize="1.5vw" color="rgb(256,256,256)"/>
            </button>
            <button id="play-pause" onClick={ this.props.handleSongClick } style={ songPlayButton }>
               <Ionicon icon={this.props.isPlaying ? "md-pause":"md-play"} className={this.props.isPlaying ? "md-pause":"md-play"} fontSize="1.5vw" color="rgb(256,256,256)"/>

            </button>
            <button id="next"  onClick={ this.props.handleNextClick } style={ songSelectButton }>
                <Ionicon icon="ios-skip-forward" className="ion-skip-forward" fontSize="1.5vw" color="rgb(256,256,256)"/>
           </button>
       </section>
       <section id="time-control">
       <div className="current-time" onClick = { this.props.formatTime }> { this.props.formattedCurrentTime }</div>
           <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={ this.props.handleTimeChange }
            className = "slider"
          />
      <div className="total-time">{this.props.formattedTotalTime}</div>
       </section>
       <section id="volume-control">
            <Ionicon icon="md-volume-down" className="icon ion-volume-low" fontSize="2vw" color= "rgb(52, 41, 58)"/>
            <input
            type="range"
            className="seek-bar"
            value={ this.props.currentVolume }
            max="1"
            min="0"
            step="0.01"
            onChange= { this.props.handleVolumeChange }
            className= "slider2"
            />
            <Ionicon icon="md-volume-up" className="icon ion-volume-high" fontSize="2vw" color= "rgb(52, 41, 58)"/>
      </section>
      </section>
    );
  }
}



export default PlayerBar;
