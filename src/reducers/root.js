import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import guesses from './guesses';
import searchResults from './searchResults';
import views from './views';

const rootReducer = combineReducers(
  {guesses, searchResults, views, routing: routerReducer}
);

export default rootReducer;
