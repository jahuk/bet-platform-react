import React from 'react';
import {Link} from 'react-router';

const User = ({id, home, away, result, bet, points}) => (
  <tr>
    <td> {home} </td>
    <td> {result} </td>
    <td> {away} </td>
    <td> {bet} </td>
    <td>
      <span className="badge">{points}</span>
    </td>
    <td>
      <Link className="badge more" to={{pathname: `/match/${id}`}}>more</Link>
    </td>
  </tr>
);

User.propTypes = {
  id: React.PropTypes.number,
  home: React.PropTypes.string,
  away: React.PropTypes.string,
  result: React.PropTypes.string,
  bet: React.PropTypes.string,
  points: React.PropTypes.number
};

export default User;
