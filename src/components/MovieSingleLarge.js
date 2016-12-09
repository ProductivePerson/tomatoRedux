import React, { Component } from 'react';
import { Image, ControlLabel } from 'react-bootstrap';

class MovieSingleLarge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie } = this.props;

    return (
      <div className="MovieWindowLarge">
        <Image src={movie.Poster} responsive thumbnail/>
        <ControlLabel>
          {movie.Title} [{movie.Year}]
        </ControlLabel>
      </div>
    );
  }
}

export default MovieSingleLarge;
