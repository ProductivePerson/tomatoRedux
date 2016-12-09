import React, { Component } from 'react';
import { Form, FormControl, ControlLabel } from 'react-bootstrap';

class MovieSearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {searchText: ""};

  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  search(e) {
    e.preventDefault();
    
    this.props.searchMovies(this.state.searchText);
  }

  render() {
    return (
      <Form inline onSubmit={this.search.bind(this)}>
        <ControlLabel>
          Search a movie here :
        </ControlLabel>
        <FormControl type="text" value={this.state.searchText}
          name="searchText" onChange={this.handleChange.bind(this)} required
          placeholder="Enter your search description here" />
      </Form>
    );
  }
}

export default MovieSearchBox;
