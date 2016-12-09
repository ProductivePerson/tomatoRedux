import React, { Component } from 'react';
import MovieSearchBox from './components/MovieSearchBox';
import MovieSearchResults from './components/MovieSearchResults';
import MovieSingleLarge from './components/MovieSingleLarge';

class App extends Component {
  render() {
    const { views } = this.props;

    return (
      <div>
        {!views.search && <MovieSearchBox {...this.props}/>}
        {views.movie && <MovieSingleLarge movie={this.props.movies.main}/>}
        {views.search && <MovieSearchResults {...this.props}/>}
      </div>
    );
  }
}

export default App;
