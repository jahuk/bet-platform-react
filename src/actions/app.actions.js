import RESULTS from './utils/results.config';
import BETS from './utils/bets.config';

/* action types */

export const RESULTS_FETCH_REQUESTED = 'RESULTS_FETCH_REQUESTED';
export const RESULTS_FETCH_DONE = 'RESULTS_FETCH_DONE';
export const RESULTS_FETCH_FAILED = 'RESULTS_FETCH_FAILED';

export const BETS_FETCH_REQUESTED = 'BETS_FETCH_REQUESTED';
export const BETS_FETCH_DONE = 'BETS_FETCH_DONE';
export const BETS_FETCH_FAILED = 'BETS_FETCH_FAILED';

/* action creators */

export function getResults() {
  return (dispatch) => {
    dispatch({type: RESULTS_FETCH_REQUESTED});

    fetch(RESULTS.URLS.LIVE.FIXTURES, RESULTS.SETTINGS)
      .then((response) => response.json())
      .then((json) => dispatch({type: RESULTS_FETCH_DONE, json}))
      .catch((error) => dispatch({type: RESULTS_FETCH_FAILED, error}));
  };
}

export function getBets() {
  return (dispatch) => {
    for (let user of BETS.URLS.USERS) {
      dispatch({type: BETS_FETCH_REQUESTED});
      fetch(`${BETS.URLS.LOCATION}${user}.json`, BETS.SETTINGS)
        .then((response) => response.json())
        .then((json) => dispatch({type: BETS_FETCH_DONE, json}))
        .catch((error) => dispatch({type: BETS_FETCH_FAILED, error}));
    }
  };
}
