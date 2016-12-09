import * as types from '../actions/actionTypes';

function movies(state = {
    isLoading: false,
    main: undefined,
    list: [],
    error: false
  }, action = null) {

  switch (action.type) {
    case types.GET_MOVIES:
      return Object.assign({}, state, {isLoading: true, error: false});

    case types.HYDRATE_MOVIES:
      return Object.assign({}, state, {isLoading: false, list: action.data, error: false});

    case types.HYDRATE_MOVIE:
      console.log("Hydrating a single movie with ", action.data);
      return Object.assign({}, state, {isLoading: false, main: action.data, error: false});

    case types.GET_ERROR:
      return Object.assign({}, state, {isLoading: false, error: true});

    default:
      return state;
  }
}

export default movies;
