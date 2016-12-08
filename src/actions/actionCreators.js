//SEARCH ACTIONS
export function postSearch(text) {
  return {
    type: "POST_GUESS",
    text
  };
}

//GUESS ACTIONS
export function addGuess(guess) {
  return {
    type: "ADD_GUESS",
    guess
  };
}

//VIEW ACTIONS
export function toggleMovieWindow() {
  return {
    type: "TOGGLE_MOVIE_WINDOW"
  };
}
