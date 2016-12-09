import * as types from '../actions/actionTypes';

function guesses(state = {
    isLoading: false,
    movies: [],
    error: false
  }, action = null) {

  switch (action.type) {
    case types.SEND_GET:
      return Object.assign({}, {isLoading: true, error: false});
    case types.HYDRATE_MOVIES:
      return Object.assign({}, {isLoading: false, movies: action.data, error: false});
    case types.GET_ERROR:
      return Object.assign({}, {isLoading: false});
    default:
      return state;
  }
}

export default guesses;
