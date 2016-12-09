import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import guesses from './guesses';
import movies from './movies';
import views from './views';

const rootReducer = combineReducers(
  {guesses, movies, views, routing: routerReducer}
);

export default rootReducer;
