import * as AppActions from '../actions/app.actions';

const defaultState = {
  results: []
};

export default (state = defaultState, action) => {

  switch (action.type) {
    case AppActions.RESULTS_FETCH_DONE:
      return {
        ...state,
        results: action.json.fixtures
      };

    default:
      return state;
  }

};
