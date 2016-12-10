import React, { Component } from 'react';
import MovieSearchBox from './components/MovieSearchBox';
import MovieSearchResults from './components/MovieSearchResults';
import MovieSingleLarge from './components/MovieSingleLarge';
import GuessWindow from './components/GuessWindow';

class App extends Component {
  render() {
    const { views } = this.props;

    console.log("Rendering with props ", this.props.views);
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
