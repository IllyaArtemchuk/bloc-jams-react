import React, { Component } from 'react';
import './App.css';
import { Route, Link} from 'react-router-dom';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
        <nav>
          <Link to="/"><button className="LandingLink"> Home Page </button></Link>
          <Link to="/library"> <button className="LibraryLink"> Music Library </button> </Link>
        </nav>
        </header>
          <h1 className="App-logo"> BLOC JAMS </h1>
      <main>
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album/:slug" component={Album} />
      </main>
      </div>
    );
  }
}

export default App;
