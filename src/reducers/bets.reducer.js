import * as AppActions from '../actions/app.actions';

const defaultState = {
  bets: []
};

export default (state = defaultState, action) => {

  switch (action.type) {
    case AppActions.BETS_FETCH_DONE:
      return {
        ...state,
        bets: [
          ...state.bets,
          action.json
        ]
      };

    default:
      return state;
  }

};
