import * as types from '../actions/actionTypes';

function views(state = {
  isLoading: false,
  error: false,
  movie: false,
  search: false,
  history: false,
  tomatoScore: false
}, action = null) {

  switch (action.type) {
    case types.NEW_SEARCH:
      console.log("How many times is this called?");
      return Object.assign({}, state, {
        isLoading: true, error: false, movie: false
      });

    case types.SELECT_MOVIE:
      console.log("You know this is called what is the problem?");
      return Object.assign({}, state, {
        isLoading: false, error: false, movie: true, search: false
      });

    case types.TOGGLE_WINDOW:
      console.log("Calling toggle window with", action.windowType);
      let toggle = !state[action.windowType];

      return Object.assign({}, state, {[action.windowType]: toggle});

    case types.GET_ERROR:
        return Object.assign({}, state, {isLoading: false, error: true});

    default:
      return state;
  }
}

export default views;
