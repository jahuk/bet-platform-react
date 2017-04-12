import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import Main from './commons/main/Main';
import Home from './commons/home/Home';
import Match from './commons/match/Match';
import User from './commons/user/User';

import './scss/styles.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="/match/:id" component={Match}/>
        <Route path="/user" component={User}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
