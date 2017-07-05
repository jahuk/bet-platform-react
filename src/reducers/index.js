// Set up your root reducer here...
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import results from './results.reducer';
import leaders from './leaders.reducer';

const rootReducer = combineReducers({
  results,
  leaders,
  routing: routerReducer
});

export default rootReducer;
