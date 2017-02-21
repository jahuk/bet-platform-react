import {URLS, SETTINGS} from './utils/request.config';

/* action types */

export const RESULTS_FETCHING = 'RESULTS_FETCHING';
export const RESULTS_FETCHED = 'RESULTS_FETCHED';
export const RESULTS_FETCHING_FAIL = 'RESULTS_FETCHING_FAIL';

/* action creators */

export function getResults() {
  return (dispatch) => {
    dispatch({type: RESULTS_FETCHING});

    fetch(URLS.LIVE.FIXTURES, SETTINGS)
      .then((response) => response.json())
      .then((json) => dispatch({type: RESULTS_FETCHED, json}))
      .catch((error) => dispatch({type: RESULTS_FETCHING_FAIL, error}));
  };
}
