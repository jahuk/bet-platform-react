import RESULTS from './utils/config/results.config';
import BETS from './utils/config/bets.config';
import extractResults from './utils/extractResults';

/* action types */

export const DATA_FETCH_REQUESTED = 'BETS_FETCH_REQUESTED';
export const DATA_FETCH_DONE = 'BETS_FETCH_DONE';
export const DATA_FETCH_FAILED = 'BETS_FETCH_FAILED';

/* action creators */

export function getData() {
  return (dispatch) => {
    dispatch({type: DATA_FETCH_REQUESTED});

    const data = [];

    const results = fetch(RESULTS.URLS.LIVE.FIXTURES, RESULTS.SETTINGS)
      .then((response) => response.json());
    data.push(results);

    for (let user of BETS.URLS.USERS) {
      const bet = fetch(`${BETS.URLS.LOCATION}${user}.json`, BETS.SETTINGS)
        .then((response) => response.json());
      data.push(bet);
    }

    Promise.all(data)
      .then((values) => {
        const results = extractResults(values.slice(0, 1));
        const bets = values.slice(1);

        dispatch({
          type: DATA_FETCH_DONE,
          results,
          bets
        });
      })
      .catch(error => {
        dispatch({type: DATA_FETCH_FAILED, error});
      });

  };
}
