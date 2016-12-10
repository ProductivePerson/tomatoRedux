import * as types from '../actions/actionTypes';

function views(state = {
  isLoading: false,
  error: false,
  movie: false,
  search: false,
  history: false,
  guess: false,
  tomatoScore: false
}, action = null) {

  switch (action.type) {
    case types.NEW_SEARCH:
      return Object.assign({}, state, {
        isLoading: true, error: false, movie: false, guess: false
      });

    case types.SELECT_MOVIE:
      return Object.assign({}, state, {
        isLoading: false, error: false, movie: true, guess: true, search: false
      });

    case types.TOGGLE_WINDOW:
      let toggle = !state[action.windowType];

      return Object.assign({}, state, {[action.windowType]: toggle});

    case types.GET_ERROR:
        return Object.assign({}, state, {isLoading: false, error: true});

    default:
      return state;
  }
}

export default views;
