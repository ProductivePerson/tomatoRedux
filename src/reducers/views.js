import * as types from '../actions/actionTypes';

function views(state = {
  movie: false,
  search: false,
  history: false,
  guess: false,
  tomatoScore: false
}, action = null) {

  switch (action.type) {
    case types.TOGGLE_WINDOW:
      let toggle = !state[action.windowType];

      return Object.assign({}, state, {[action.windowType]: toggle});
    default:
      return state;
  }
}

export default views;
