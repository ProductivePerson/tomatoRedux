import React, { Component } from 'react';
import { Image, ControlLabel, Col} from 'react-bootstrap';

class MovieSingleSmall extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="MovieWindowSmall">
        <Col xs={6} md={4}>
          <Image src={movie.Poster} responsive thumbnail/>
          <ControlLabel>
            {movie.Title}
          </ControlLabel>
        </Col>
      </div>
    );
  }
}

export default MovieSingleSmall;
