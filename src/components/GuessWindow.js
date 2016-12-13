import React, { Component } from 'react';
import { Form, FormControl, ControlLabel, Checkbox,
  OverlayTrigger, Tooltip} from 'react-bootstrap';

import GameTomatoWindow from './GameTomatoWindow';

class GuessWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {guessRange: 5, userGuess: "", proMode: false};
  }

  handleChange(e) {
    if (e.target.value >= 0 && e.target.value <= 100)
      this.setState({[e.target.name]: e.target.value});
  }

  togglePro(e) {
    this.setState({proMode: !this.state.proMode});
  }

  guessScore() {
    console.log("Guessing with a score of ", this.state.userGuess);
  }

  render() {
    const proTooltip = (
        <Tooltip id="ProCheck-Tooltip">
          Pro-mode awards only exact guesses.
        </Tooltip>
    );

    return (
      <div id="Guess-Window">
        <GameTomatoWindow movie={this.props.movies.main} />
        <div id="Guess-Input">
          <Form onSubmit={this.guessScore.bind(this)}>
            <FormControl type="number" value={this.state.userGuess}
              name="userGuess" onChange={this.handleChange.bind(this)} required
              placeholder="Enter Tomatoscore" />
            <OverlayTrigger placement="top" overlay={proTooltip}>
              <Checkbox checked={this.state.proMode} onClick={this.togglePro.bind(this)}>
                Pro-mode
              </Checkbox>
            </OverlayTrigger>
          </Form>
        </div>
      </div>
    );
  }
}

export default GuessWindow;
