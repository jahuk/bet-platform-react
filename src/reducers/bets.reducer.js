import * as AppActions from '../actions/app.actions';

const defaultState = [];

export default (state = defaultState, action) => {

  switch (action.type) {

    case AppActions.DATA_FETCH_DONE:
      return action.bets;

    default:
      return state;
  }

};
