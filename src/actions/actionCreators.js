import * as types from './actionTypes';
import * as api from './APIcalls';

//SEARCH ACTIONS
export function searchMovies(text) {
  return (dispatch) => {
    dispatch({type: types.SEND_GET});
    return api.getMovieList(text)
      .then((res) => dispatch(hydrateMovies(res.data.Search)))
      .catch((err) => searchError(err));
  };
}

export function hydrateMovies(data) {
  console.log("Hydrating movies with data ", data);
  return {
    type: types.HYDRATE_MOVIES,
    data
  };
}

export function searchError() {
  return {
    type: types.GET_ERROR
  };
}

//GUESS ACTIONS
export function addGuess(guess) {
  return {
    type: types.ADD_GUESS,
    guess
  };
}

//VIEW ACTIONS
export function toggleMovieWindow() {
  return {
    type: types.TOGGLE_MOVIE_WINDOW
  };
}
