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
        <header>
        <nav>
          <Link to="/">  Landing  </Link>
          <Link to="/library">  Library  </Link>
          <h1> Bloc Jams </h1>
        </nav>
        </header>
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
