import React, { Component } from 'react';
import { Grid, Row, Button } from 'react-bootstrap';
import MovieSingleSmall from './MovieSingleSmall';

class MovieSearchResults extends Component {
  goBack() {
    this.props.toggleWindow("search");
  }

  render() {
    return (
      <div className="Movie-Search-Results">
        <Button onClick={this.goBack.bind(this)}>Back</Button>
        <Grid>
          {this.props.movies.list.map((movie, idx) =>
            <Row key={idx}>
              <MovieSingleSmall movie={movie} getMovie={this.props.getMovie}/>
            </Row>
          )}
        </Grid>
      </div>
    );
  }
}

export default MovieSearchResults;
