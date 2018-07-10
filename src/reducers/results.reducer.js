import * as AppActions from '../actions/app.actions';

const defaultState = [];

export default (state = defaultState, action) => {

  switch (action.type) {

    case AppActions.DATA_FETCH_DONE:
      return action.results.filter(match => match.matchday === 4 || match.matchday === 5 || match.matchday === 6);
      // return action.results.filter(match => match.matchday > 3 && (match.status === 'TIMED' || match.status === 'IN_PLAY' || match.status === 'FINISHED'));

    default:
      return state;
  }

};
