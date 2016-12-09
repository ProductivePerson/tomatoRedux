import React, { Component } from 'react';
import MovieSearchBox from './components/MovieSearchBox';

class App extends Component {
  render() {
    return (
      <div>
        <MovieSearchBox {...this.props}/>
      </div>
    );
  }
}

export default App;
