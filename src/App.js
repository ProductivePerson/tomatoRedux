import React, { Component } from 'react';
import MovieSearchBox from './components/MovieSearchBox';

import tomato from '../public/tomato.ico';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={tomato} className="App-logo" alt="logo" />
          <h2>Welcome to the movie guesser!</h2>
        </div>
        <p className="App-intro">
          There's a -p- tag here
        </p>
        <MovieSearchBox />
      </div>
    );
  }
}

export default App;
