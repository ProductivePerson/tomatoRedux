import React, { Component } from 'react';
import { Form, FormControl, ControlLabel, Checkbox,
  OverlayTrigger, Tooltip} from 'react-bootstrap';

import GameTomatoWindow from './GameTomatoWindow';
// import FeedbackWindow from './FeedbackWindow';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {userGuess: "", proMode: false, rightAnswer: undefined};
  }

  handleChange(e) {
    if (e.target.value >= 0 && e.target.value <= 100)
      this.setState({[e.target.name]: e.target.value});
  }

  togglePro(e) {
    this.setState({proMode: !this.state.proMode});
  }

  checkAnswer(score) {
    const { tomatoMeter } = this.props.movies.main;

    return this.state.proMode ?
        Math.floor(score) === tomatoMeter
      : tomatoMeter-5 <= score && tomatoMeter+5 >=score;
  }

  guessScore(e) {
    e.preventDefault();
    let isCorrectGuess = this.checkAnswer(this.state.userGuess);

    this.props.addGuess(isCorrectGuess, this.props.movies.main);
    this.setState({rightAnswer: this.checkAnswer(isCorrectGuess)});
  }

  render() {
    const proTooltip = (
        <Tooltip id="ProCheck-Tooltip">
          Pro-mode awards only exact guesses.
        </Tooltip>
    );

    return (
      <div id="Guess-Window">
        <GameTomatoWindow movie={this.props.movies.main} rightAnswer={this.state.rightAnswer}/>
        {/* <FeedbackWindow movie={this.props.movies.main} rightAnswer={this.state.rightAnswer} /> */}

        {!this.state.rightAnswer && <div id="Guess-Input">
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
        </div>}
      </div>
    );
  }
}

export default Game;
