import React from 'react';
import User from './user/User';

const UserList = ({leaders, results, userId}) => (
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

    {results.map((result, i) => {

      return <User
        key={i}
        id={i}
        home={result.home}
        away={result.away}
        result={result.result}
        bet={result.result}
        matchday={result.matchday}
      />;
      }

    )}

    </tbody>
  </table>
);

UserList.propTypes = {
  leaders: React.PropTypes.array,
  results: React.PropTypes.array,
  userId: React.PropTypes.number
};

export default UserList;
