import * as ScoresActions from '../actions/scores.actions';

const defaultState = {
  results: []
};

export default (state = defaultState, action) => {

  switch (action.type) {
    case ScoresActions.RESULTS_FETCHED:

      return {
        ...state,
        results: action.json.fixtures
      };

    default:
      return state;
  }

};
