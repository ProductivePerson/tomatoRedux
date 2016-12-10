import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';

const defaultState = {
  movies: {list: []},
  guesses: {
    history: [],
    range: 5
  },
  views: {
    movie: false,
    search: false,
    history: false,
    game: false,
    tomatoScore: false
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(thunk)));

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
