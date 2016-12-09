import React, { Component } from 'react';
import MovieSearchBox from './components/MovieSearchBox';
import MovieSearchResults from './components/MovieSearchResults';

class App extends Component {
  render() {
    return (
      <div>
        <MovieSearchBox {...this.props}/>
        <MovieSearchResults movies={this.props.movies} />
      </div>
    );
  }
}

export default App;
