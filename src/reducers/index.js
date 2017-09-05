// Set up your root reducer here...
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import results from './results.reducer';
import bets from './bets.reducer';
import leaders from './leaders.reducer';

const rootReducer = combineReducers({
  results,
  bets,
  leaders,
  routing: routerReducer
});

export default rootReducer;
