import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import AppRedux from './AppRedux';

console.log(AppRedux);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppRedux}>
        <IndexRoute component={App}></IndexRoute>
        <Route path="/app" component={App}></Route>
      </Route>
    </Router>
  </Provider>
);

render(
  <router />,
  document.getElementById('root')
);
