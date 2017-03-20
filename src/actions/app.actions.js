import {URLS, SETTINGS} from './utils/request.config';

/* action types */

export const RESULTS_FETCH_REQUESTED = 'RESULTS_FETCH_REQUESTED';
export const RESULTS_FETCH_DONE = 'RESULTS_FETCH_DONE';
export const RESULTS_FETCH_FAILED = 'RESULTS_FETCH_FAILED';

/* action creators */

export function getResults() {
  return (dispatch) => {
    dispatch({type: RESULTS_FETCH_REQUESTED});

    fetch(URLS.LIVE.FIXTURES, SETTINGS)
      .then((response) => response.json())
      .then((json) => dispatch({type: RESULTS_FETCH_DONE, json}))
      .catch((error) => dispatch({type: RESULTS_FETCH_FAILED, error}));
  };
}
