import * as types from './actionTypes';
import * as api from './APIcalls';

//TODO - remove temp data;
// import { searchResults, movieResults } from '../tempData';

//SEARCH ACTIONS

export function searchMovies(text) {
  return (dispatch) => {
    dispatch(newSearch());

    // dispatch(toggleWindow("search"));
    // dispatch(hydrateMovies(JSON.parse(searchResults)));

    dispatch(setAnimation("App-logo-infinite-spin"));
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

    // dispatch(hydrateMovie(JSON.parse(movieResults)));
    // dispatch(selectMovie());

    return api.getSingleMovie(id)
      .then((res) => {
        console.log("Successfully got a single movie", res);
        dispatch(setAnimation("App-logo-single-spin"));
        dispatch(hydrateMovie(res.data));
        dispatch(selectMovie());
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

//GUESS ACTIONS
export function addGuess(guess, movie) {
  return {
    type: types.ADD_GUESS,
    guess,
    movie
  };
}

//VIEW ACTIONS

export function toggleWindow(windowType) {
  return {
    type: types.TOGGLE_WINDOW,
    windowType
  };
}

export function newSearch() {
  return {
    type: types.NEW_SEARCH
  };
}

export function selectMovie() {
  return {
    type: types.SELECT_MOVIE
  };
}

export function setAnimation(style) {
  return {
    type: types.SET_ANIMATION,
    style
  };
}

export function searchError() {
  return {
    type: types.GET_ERROR
  };
}
