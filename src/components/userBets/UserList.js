import React from 'react';
import User from './user/User';
import getMatchPoints from '../../utils/getMatchPoints';

const UserList = ({results, bets, userId}) => (
  <table className="table results">
    <thead>
    <tr>
      <th>Result</th>
      <th/>
      <th/>
      <th>Bet</th>
      <th>Points</th>
    </tr>
    </thead>
    <tbody>

    {results.length > 0 && results.map((result, i) => {
        const userBets = bets.find((bet) => bet.id === userId).bets[i].bet;
        const userPoints = getMatchPoints(result.result, userBets, result.matchday);
        const isPointsLive = result.status === 'IN_PLAY';
        return <User key={i} id={i} home={result.home} away={result.away} result={result.result} bet={userBets} points={userPoints} isPointsLive={isPointsLive} />;
      }
    )}

    </tbody>
  </table>
);

UserList.propTypes = {
  results: React.PropTypes.array,
  bets: React.PropTypes.array,
  userId: React.PropTypes.number
};

export default UserList;
