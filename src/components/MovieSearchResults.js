import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import MovieSingleSmall from './MovieSingleSmall';

class MovieSearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Movie-Search-Results">
        <Grid>
          {this.props.movies.list.map((movie, idx) =>
            <Row key={idx}>
              <MovieSingleSmall movie={movie} />
            </Row>
          )}
        </Grid>
      </div>
    );
  }
}

export default MovieSearchResults;
