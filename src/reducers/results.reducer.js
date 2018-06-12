import * as AppActions from '../actions/app.actions';

const defaultState = [];

export default (state = defaultState, action) => {

  switch (action.type) {

    case AppActions.DATA_FETCH_DONE:
      return action.results
        .filter(match => match.matchday <= 3);

    default:
      return state;
  }

};
