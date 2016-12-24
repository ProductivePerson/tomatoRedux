import React, { Component } from 'react';
import { Grid, Row, Button } from 'react-bootstrap';
import MovieSingleSmall from './MovieSingleSmall';

import "../css/Movies.css";

class MovieSearchResults extends Component {
  goBack() {
    this.props.toggleWindow("search");
  }

  render() {
    return (
      <div>
        <Button onClick={this.goBack.bind(this)}>Back</Button>
        <div className="Movie-Search-Results">
          {/* <Grid> */}
          {this.props.movies.list.map((movie, idx) =>
            // <Row key={idx}>
            <MovieSingleSmall movie={movie} getMovie={this.props.getMovie}/>
            // </Row>
          )}
          {/* </Grid> */}
        </div>
      </div>
    );
  }
}

export default MovieSearchResults;
