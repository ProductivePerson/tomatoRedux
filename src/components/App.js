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
        {views.search && <MovieSearchResults {...this.props}/>}
        <div id="Game-Window">
          <div id="Movie-Info-Window">
            {views.movie && <MovieSingleLarge movie={this.props.movies.main}/>}
          </div>
          <div id="Game-Info-Window">
            {views.game && <Game {...this.props} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
