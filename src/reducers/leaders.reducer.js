import * as AppActions from '../actions/app.actions';
import getLeaders from '../utils/getLeaders';

const defaultState = [];

export default (state = defaultState, action) => {

  switch (action.type) {

    case AppActions.DATA_FETCH_DONE:
      return getLeaders(action.results.filter(match => match.matchday > 3), action.bets);

    default:
      return state;
  }

};
