import * as types from '../actions/actionTypes';

function views(state = {
  isLoading: false,
  error: false,
  movie: false,
  search: false,
  history: false,
  animation: "App-logo-single-spin",
  tomatoScore: false
}, action = null) {

  switch (action.type) {
    case types.NEW_SEARCH:
      return Object.assign({}, state, {
        isLoading: true, error: false, movie: false, game: false
      });

    case types.SELECT_MOVIE:
      return Object.assign({}, state, {
        isLoading: false, error: false, movie: true, search: false, game: true
      });

    case types.TOGGLE_WINDOW:
      // console.log("Calling toggle window with", action.windowType);
      let toggle = !state[action.windowType];

      return Object.assign({}, state, {[action.windowType]: toggle});

    case types.SET_ANIMATION:
      return Object.assign({}, state, {animation: action.style});

    case types.GET_ERROR:
        return Object.assign({}, state, {isLoading: false, error: true});

    default:
      return state;
  }
}

export default views;
