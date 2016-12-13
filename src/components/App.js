import React, { Component } from 'react';
import MovieSearchBox from './MovieSearchBox';
import MovieSearchResults from './MovieSearchResults';
import MovieSingleLarge from './MovieSingleLarge';
import GuessWindow from './GuessWindow';

class App extends Component {
  render() {
    const { views } = this.props;

    return (
      <div>
        {!views.search && <MovieSearchBox {...this.props}/>}
        {views.movie && <MovieSingleLarge movie={this.props.movies.main}/>}
        {views.search && <MovieSearchResults {...this.props}/>}
        {views.game && <GuessWindow {...this.props} />}
      </div>
    );
  }
}

export default App;
