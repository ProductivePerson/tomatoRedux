import React, { Component } from 'react';

class GameTomatoWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {showAnswer: false, tomatoImg: ""};
  }
  showTomatoImg() {
    const { tomatoMeter } = this.props.movie;

    if (tomatoMeter > 84)
      return "../public/fresh.png";
    else if (tomatoMeter < 60)
      return "../public/rotten.png";
    else {
      return "../public/neutral.png";
    }
  }
  render() {
    const { movie } = this.props,
          { showAnswer } = this.state;
    return (
      <div id="Guess-Description">
        <img src={this.state.showAnswer ? this.showTomatoImg : ""} />
        <p>Tomato Score: {showAnswer ? movie.tomatoMeter : "??"}%</p>
        <div id="Movie-Text-Box">
          <p>
            {movie.Plot}hahaha
          </p>
        </div>
      </div>
    );
  }
}

export default GameTomatoWindow;
