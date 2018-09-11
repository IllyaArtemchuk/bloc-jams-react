import React, { Component } from 'react';
import albumData from './../data/albums';
import Ionicon from 'react-ionicons';
import PlayerBar from './PlayerBar';

const ionPlay = {
  width:"1vw"
}


const albumPage = {
  marginTop: "1vw",
  fontFamily: "Lato",
  color: "rgb(20,30,30)"
}
const imageStyle = {
  width: "20vw",
  borderStyle: "solid",
  borderWidth: "1vw",
  borderColor: "rgb(190,190,210)",
  marginTop: "1vw"
}

const albumTitle = {
fontFamily: "Lato",
fontSize: "2vw",
marginTop: "1vw"
}

const albumArtist = {
  marginTop: "-2vw",
  fontSize: "1vw"
}

const albumRelease = {
  marginTop: "1vw",
  fontSize: ".7vw",
  fontWeight: "bolder"
}

const albumInformation = {
  backgroundColor: "rgb(210,210,230)",
  width: "20vw",
  margin: "auto",
  marginTop: "-1.3vw",
  textAlign: "Center",
  height:"6vw",
  borderRight: "1vw solid rgb(190,190,210)",
  borderLeft: "1vw solid rgb(190,190,210)",
}

const songList = {
  textAlign: "Center",
  backgroundColor:  "rgb(190,190,210)",
  marginLeft: "auto",
  marginRight: "auto",
  width: "22vw",
  fontSize: "1vw",
  fontFamily: "Lato",
}

const songNumber = {
  width: "1.5vw",
  height: "1.8vw",
  fontSize: "1vw",
  position: "auto"
}

const songTitle = {
  textAlign: "left",
  margin: "0vw 0vw 0vw 5vw",
  width: "5vw"
}

const categoryRow = {
  fontSize: "1.2vw",
  fontWeight: "bold",
  margin: "1vw 1vw 1vw 1vw",
}

const songTime = {
  textAlign : "right",
}

const hash = {
  color: "rgb(190,121,179)"
}
class Album extends Component {
  constructor(props){
    super(props);
    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      isPlaying: false,
      isHovering: false,
      currentSongHovered: album.songs[0],
      currentVolume: 1,
      formattedTotalTime: "0:00",
      formattedCurrentTime: "0:00"
       };


    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
    }

    formatTime(time) {
       var minutes = (Math.floor(time/60));
       var seconds = (Math.floor(time - minutes * 60 ));
       if (seconds > 9) {
          return minutes + ":" + seconds
        }
       else if (seconds < 10) {
         return minutes + ":0" + seconds
       }
    }

    componentDidMount() {
      this.eventListeners = {
        timeupdate: e => {
          this.setState({
            currentTime: this.audioElement.currentTime,
            formattedCurrentTime: this.formatTime( this.audioElement.currentTime )
           });
        },
        durationchange: e => {
          this.setState({ duration: this.audioElement.duration ,
          formattedTotalTime: this.formatTime( this.audioElement.duration ),
          });

        }
      };
      this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
      this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);



    }

    componentWillUnmount() {
      this.audioElement.src = null;
      this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
      this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
  }


  play() {
    this.audioElement.play();
    this.setState ({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false})
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong === true) {
      this.pause();
    }
    else {
      if (!isSameSong ) { this.setSong(song); }
      this.play();
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex -1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.min(currentIndex + 1, this.state.album.songs.length -1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  convertToSeconds(song) {
    const time = song.duration;
    return Math.floor(time)
  }

handleEnter(song) {
    this.setState({
      isHovering: true,
      currentSongHovered: song
    })
}

handleLeave() {
  this.setState ({
    isHovering: false
  })
}



handleTimeChange(e) {
  const newTime = this.audioElement.duration * e.target.value;
  this.audioElement.currentTime = newTime;
  this.setState({ currentTime: newTime });
}

handleVolumeChange(e) {
  const newVolume = e.target.value;
  this.audioElement.volume = newVolume;
  this.setState({ currentVolume: newVolume })
}

renderButton(song) {
  if (this.state.currentSong === song && this.state.isPlaying === true && this.state.currentSongHovered !== song) {
    return  <Ionicon icon="md-pause" fontSize="1.5vw"/>
  }
  else if (this.state.currentSong === song && this.state.isPlaying === true) {
    return  <Ionicon icon="md-pause" fontSize="1.5vw" />
  }
  else if (this.state.isPlaying === false || this.state.currentSong !== song && this.state.currentSongHovered === song) {
    return  <Ionicon icon="md-play" fontSize="1.5vw" />
  }
  else if (this.state.isPlaying === false && this.state.currentSong === song) {
    return <Ionicon icon="md-play" fontSize="1.5vw" />
  }
}


  render() {
    return (
      <section style={albumPage} className="album">
       <section id="album-info">
          <img style={imageStyle} id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
          <div className="album-details" style= {albumInformation}>
                <h1 style={albumTitle} id="album-title">{ this.state.album.title }</h1>
                <h2 style={albumArtist} className="artist">{ this.state.album.artist }</h2>
                <div style={albumRelease} id="release-info">{ this.state.album.releaseInfo }</div>
            </div>
        </section>
        <table style={songList} id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody >
          <tr style ={ categoryRow }>
          <td style = {hash}> # </td>
          <td> Song </td>
          <td style={songTime}> <Ionicon icon="ios-clock-outline" fontSize="2vw"/> </td>
          </tr>
          {this.state.album.songs.map ( (song, index) =>
          <tr key = {index} className="song" onClick= { ()=> this.handleSongClick(song)} onMouseEnter={ ()=> this.handleEnter(song)} onMouseLeave = { ()=> this.handleLeave()}>
          <td style= {songNumber}> {(this.state.currentSong === song)||(this.state.isHovering && this.state.currentSongHovered === song)? this.renderButton(song):index + 1 } </td>
          <td style= {songTitle}> {song.title} </td>
          <td style ={songTime}> {this.formatTime(song.duration)} </td>
          </tr>
        )}
          </tbody>
        </table>

        <PlayerBar
        isPlaying= { this.state.isPlaying }
        currentSong= { this.state.currentSong }
        handleSongClick = {() => this.handleSongClick( this.state.currentSong )}
        handlePrevClick= {() => this.handlePrevClick() }
        handleNextClick = {() => this.handleNextClick() }
        currentTime = { this.audioElement.currentTime }
        duration = { this.audioElement.duration }
        handleTimeChange={(e) => this.handleTimeChange(e)}
        currentVolume = { this.state.currentVolume }
        handleVolumeChange = { (e) => this.handleVolumeChange(e) }
        formatTime = { () => this.formatTime() }
        formattedCurrentTime = { this.state.formattedCurrentTime }
        formattedTotalTime = { this.state.formattedTotalTime }
        />
    </section>
    );
  }
}

export default Album;
