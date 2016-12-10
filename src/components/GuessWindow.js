import React, { Component } from 'react';

class GuessWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {guessRange: 5, guess: "", tomatoImg: ""};
  }

  render() {
    return (
      <div id="Guess-Window">
        <div id="Guess-Description">
          <img src={this.state.tomatoImg} />
          <p>Tomato Score: ??</p>
          <div id="Movie-Text-Box">
            <p>
              The plot of the movie goes here
              {/* {this.props.movie.Plot} */}
            </p>
          </div>
        </div>
        <div id="Guess-Input">

        </div>
      </div>
    );
  }
}

export default GuessWindow;
