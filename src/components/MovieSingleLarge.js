import React, { Component } from 'react';
import { Image, ControlLabel } from 'react-bootstrap';

class MovieSingleLarge extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { movie } = this.props;

    return (
      <div className="MovieWindowLarge">
        <ControlLabel>
          {movie.Title} [{movie.Year}]
        </ControlLabel>
        <div>
          <Image src={movie.Poster} className="Poster" responsive thumbnail/>
        </div>
      </div>
    );
  }
}

export default MovieSingleLarge;
