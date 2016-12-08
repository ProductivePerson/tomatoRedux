import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';

const defaultState = {
  searchResults: [],
  guesses: {
    history: [],
    range: 5
  },
  views: {
    movie: false,
    history: false
  }
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
