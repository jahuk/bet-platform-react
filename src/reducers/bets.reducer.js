import * as AppActions from '../actions/app.actions';

const defaultState = [];

export default (state = defaultState, action) => {

  switch (action.type) {
    case AppActions.BETS_FETCH_DONE:
      return [
        ...state,
        action.json
      ];

    default:
      return state;
  }

};
