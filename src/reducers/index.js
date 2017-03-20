// Set up your root reducer here...
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import scores from './results.reducer';

const rootReducer = combineReducers({
  scores,
  routing: routerReducer
});

export default rootReducer;
