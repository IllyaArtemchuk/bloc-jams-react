import React, { Component } from 'react';
import '../Styles/Landing.css';


const Icon = {
  fontSize: "200px",
}
class Landing extends Component {
  render () {
    return (
    <section className="landing">
    <h1 className="hero-title">Turn the music up!</h1>

    <section className="selling-points">
      <div className="point">
        <h2 className="point-title">
        <ion-icon ios="ios-musical-notes" md="md-musical-notes" ></ion-icon>
        Choose your music </h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point">
        <h2 className="point-title">
        <ion-icon ios="ios-save" md="md-save" > </ion-icon>
        Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point">
        <h2 className="point-title">
          <ion-icon ios="ios-phone-portrait" md="md-phone-portrait" > </ion-icon>
        Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
    </section>
  );
  }
}

export default Landing;
