// Set up your root reducer here...
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import results from './results.reducer';
import bets from './bets.reducer';

const rootReducer = combineReducers({
  results,
  bets,
  routing: routerReducer
});

export default rootReducer;
