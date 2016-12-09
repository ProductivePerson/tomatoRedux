import * as types from './actionTypes';
import * as api from './APIcalls';

//SEARCH ACTIONS
export function searchMovies(text) {
  return (dispatch) => {
    dispatch({type: types.GET_MOVIES});

    return api.getMovieList(text)
      .then((res) => {
        dispatch(toggleWindow("search"));
        dispatch(hydrateMovies(res.data.Search));
      })
      .catch((err) => searchError(err));
  };
}

export function getMovie(id) {
  return (dispatch) => {
    console.log("Entering the movieGet");

    dispatch(toggleWindow("search"));
    dispatch({type: types.GET_MOVIES});

    return api.getSingleMovie(id)
      .then((res) => {
        console.log("Successfully got a single movie", res);
        dispatch(hydrateMovie(res.data));
        console.log("The next move should be to show the movie");
        dispatch(toggleWindow("movie"));
        // dispatch(toggleWindow("game"));
      })
      .catch(err => searchError(err));
  };
}

export function hydrateMovies(data) {
  console.log("Hydrating movies with data ", data);

  return {
    type: types.HYDRATE_MOVIES,
    data
  };
}

export function hydrateMovie(data) {
  return {
    type: types.HYDRATE_MOVIE,
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

export function toggleWindow(windowType) {
  return {
    type: types.TOGGLE_WINDOW,
    windowType
  };
}
