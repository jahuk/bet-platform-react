import * as AppActions from '../actions/app.actions';

const defaultState = [];

export default (state = defaultState, action) => {

  switch (action.type) {
    case AppActions.RESULTS_FETCH_DONE:
      return action.json.fixtures;

    default:
      return state;
  }

};
