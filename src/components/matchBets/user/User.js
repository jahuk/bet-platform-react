import React from 'react';
import {Link} from 'react-router';

const User = ({id, name, bet, points}) => (
  <tr>
    <td> {name} </td>
    <td> {bet} </td>
    <td>
      <span className="badge">{points}</span>
    </td>
    <td>
      <Link className="badge more" to={{pathname: `/user/${id}`}}>more</Link>
    </td>
  </tr>
);

User.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  bet: React.PropTypes.string,
  points: React.PropTypes.number
};

export default User;
