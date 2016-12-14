import React, { Component } from 'react';
import MovieSearchBox from './MovieSearchBox';
import MovieSearchResults from './MovieSearchResults';
import MovieSingleLarge from './MovieSingleLarge';
import Game from './Game';

class App extends Component {
  render() {
    const { views } = this.props;

    return (
      <div>
        {!views.search && <MovieSearchBox {...this.props}/>}
        {views.movie && <MovieSingleLarge movie={this.props.movies.main}/>}
        {views.search && <MovieSearchResults {...this.props}/>}
        {views.game && <Game {...this.props} />}
      </div>
    );
  }
}

export default App;
