import React, { Component } from 'react';
import { Image, ControlLabel, Col} from 'react-bootstrap';
import "../css/Movies.css";

class MovieSingleSmall extends Component {
  getSingleMovie() {
    this.props.getMovie(this.props.movie.imdbID);
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="Movie-Window-Small" onClick={this.getSingleMovie.bind(this)}>
        <div>
          <Image className="Movie-Thumbnail" src={movie.Poster} responsive thumbnail/>
          <ControlLabel>
            {movie.Title} [{movie.Year}]
          </ControlLabel>
        </div>
        <div>
          
        </div>
      </div>
    );
  }
}

export default MovieSingleSmall;
