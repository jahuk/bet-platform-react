import React from 'react';

const User = ({home, away, result, bet, matchday}) => (
  <tr>
    <td> {home} </td>
    <td> {result} </td>
    <td> {away} </td>
    <td> {bet} </td>
    <td>
      <span className="badge">3</span>
    </td>
  </tr>
);

User.propTypes = {
  id: React.PropTypes.number,
  home: React.PropTypes.string,
  away: React.PropTypes.string,
  result: React.PropTypes.string,
  bet: React.PropTypes.string,
  matchday: React.PropTypes.number
};

export default User;
