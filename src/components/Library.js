import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import "../Styles/Library.css"


const ImageSizing = {
  width: "21vw",
}

const AlbumInformation = {
  fontSize: "1vw",
  border: "none",
  width: "21vw",
  height: "5vw",
  margin: "-.5vw 0 .5vw 0",
  backgroundColor: "rgb(210,210,230)",
  color: "rgb(30,40,40)",
  fontFamily: "Lato"
}

const AlbumTitle = {
  fontSize: "1.5vw",
}


class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
     albums: albumData
   };
  }
  render () {
    return (
    <section className="library">
    {
      this.state.albums.map( (album, index) =>
      <Link to={`/album/${album.slug}`} key={index}>
      <img style={ImageSizing} src={album.albumCover} alt={album.title} />
      <div>
      <button style= { AlbumInformation } >
      <div style={ AlbumTitle }>{album.title}</div>
      <div>{album.artist}</div>
      <div>{album.songs.length} songs</div>
      </button>
      </div>
      </Link>
    )
    }
    </section>
    );
  }
}

export default Library;
