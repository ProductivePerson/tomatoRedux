import React, { Component } from 'react';
import { Image, ControlLabel, Col} from 'react-bootstrap';

class MovieSingleSmall extends Component {
  // constructor(props) {
  //   super(props);
  // }

  getSingleMovie() {
    this.props.getMovie(this.props.movie.imdbID);
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="MovieWindowSmall" onClick={this.getSingleMovie.bind(this)}>
        <Col xs={6} md={4}>
          {/* <Image src={movie.Poster} responsive thumbnail/> */}
          <ControlLabel>
            {movie.Title} [{movie.Year}]
          </ControlLabel>
        </Col>
      </div>
    );
  }
}

export default MovieSingleSmall;
