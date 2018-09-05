import React, { Component } from 'react';
import Ionicon from 'react-ionicons';


class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
            <button id="previous" onClick={ this.props.handlePrevClick }>
                <Ionicon icon="ios-skip-backward" className="ion-skip-backward"/>
            </button>
            <button id="play-pause" onClick={ this.props.handleSongClick }>
               <Ionicon icon={this.props.isPlaying ? "md-pause":"md-play"} className={this.props.isPlaying ? "md-pause":"md-play"}/>

            </button>
            <button id="next"  onClick={ this.props.handleNextClick }>
                <Ionicon icon="ios-skip-forward" className="ion-skip-forward"/>
           </button>
       </section>
       <section id="time-control">
       <div className="current-time">{this.props.currentTime}</div>
           <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={ this.props.handleTimeChange }
          />
      <div className="total-time">{this.props.duration}</div>
       </section>
       <section id="volume-control">
            <Ionicon icon="md-volume-down" className="icon ion-volume-low"/>
            <input type="range" className="seek-bar" value="80" />
            <Ionicon icon="md-volume-up" className="icon ion-volume-high"/>
      </section>
      </section>
    );
  }
}



export default PlayerBar;
