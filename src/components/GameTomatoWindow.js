import React, { Component } from 'react';
import certified from "../../public/certified.png";
import fresh from "../../public/fresh.png";
import rotten from "../../public/rotten.png";
import neutral from "../../public/neutral.png";

class GameTomatoWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {tomatoImg: ""};
  }
  showTomatoImg() {
    switch (this.props.movie.tomatoImage) {
      case "fresh":
        return fresh;
      case "certified":
        return certified;
      case "rotten":
        return rotten;
    }
  }
  render() {
    const { movie, rightAnswer } = this.props;

    return (
      <div id="Guess-Description">
        <img src={rightAnswer !== undefined ? this.showTomatoImg() : ""} />
        <p>Tomato Score: {rightAnswer !== undefined ? movie.tomatoMeter : "??"}%</p>
        <div id="Movie-Text-Box">
          <p>
            {rightAnswer !== undefined ? movie.tomatoConsensus : movie.Plot}
          </p>
        </div>
      </div>
    );
  }
}

export default GameTomatoWindow;
