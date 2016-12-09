import * as types from '../actions/actionTypes';

function movies(state = {
    isLoading: false,
    main: undefined,
    list: [],
    error: false
  }, action = null) {

  switch (action.type) {
    case types.HYDRATE_MOVIES:
      return Object.assign({}, state, {list: action.data});

    case types.HYDRATE_MOVIE:
      console.log("Hydrating a single movie with ", action.data);
      return Object.assign({}, state, {main: action.data});

    default:
      return state;
  }
}

export default movies;
