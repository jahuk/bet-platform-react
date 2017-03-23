import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import Home from './containers/home/Home';
import Match from './containers/match/Match';
import User from './containers/user/User';

import './scss/styles.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home}/>
      <Route path="match" component={Match}/>
      <Route path="user" component={User}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
