// Set up your root reducer here...
import {combineReducers} from 'redux';

import scores from './results.reducer';

const rootReducer = combineReducers({
  scores
});

export default rootReducer;
