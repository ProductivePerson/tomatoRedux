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
        {/* <Col xs={6} md={4}> */}
          <Image className="Movie-Thumbnail" src={movie.Poster} responsive thumbnail/>
          <ControlLabel>
            {movie.Title} [{movie.Year}]
          </ControlLabel>
        {/* </Col> */}
      </div>
    );
  }
}

export default MovieSingleSmall;
