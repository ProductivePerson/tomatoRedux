import React from 'react';
import { render } from 'react-dom';
import './css/index.css';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import ReduxConnect from './ReduxConnect';

import App from './components/App';
import RottenWindow from './components/RottenWindow';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={ReduxConnect}>
        <IndexRoute component={App}></IndexRoute>
        <Route path="/app" component={App}></Route>
        <Route path='test' component={RottenWindow}></Route>
      </Route>
    </Router>
  </Provider>
);

render(
  router,
  document.getElementById('root')
);
