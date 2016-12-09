import * as types from '../actions/actionTypes';

function movies(state = {
    isLoading: false,
    movie: undefined,
    list: [],
    error: false
  }, action = null) {

  switch (action.type) {
    case types.SEND_GET:
      return Object.assign({}, {isLoading: true, error: false});
    case types.HYDRATE_MOVIES:
      console.log("ding ding ding");
      return Object.assign({}, {isLoading: false, list: action.data, error: false});
    case types.GET_ERROR:
      return Object.assign({}, {isLoading: false, error: true});
    default:
      return state;
  }
}

export default movies;
