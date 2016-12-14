import * as types from '../actions/actionTypes';

function guesses(state = [], action = null) {
  switch (action.type) {
    case types.ADD_GUESS:
      return [...state, {guess: action.guess}];
    default:
      return state;
  }
}

export default guesses;
