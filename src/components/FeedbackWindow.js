import React, { Component } from 'react';

class FeedbackWindow extends Component {
  render() {
    return (
      <div id="Feedback-Window">
        <h4>Feedback</h4>
        <p>{this.props.rightAnswer && this.props.rightAnswer ? "You guessed it!" : "You guessed wrong..."}</p>
        <div id="Rotten-User-Info">
          Place information about rotten tomatoes users here.
        </div>
      </div>
    );
  }
}

export default FeedbackWindow;
