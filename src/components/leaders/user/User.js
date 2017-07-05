import React from 'react';
import {Link} from 'react-router';

const User = ({id, name, points, place}) => (
  <tr>
    <td>{place}</td>
    <td><a className="user">{name}</a></td>
    <td><span className="badge">{points}</span></td>
    <td><Link className="badge" to={{pathname: `/user/${id}`}}>GO</Link></td>
  </tr>
);

User.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  points: React.PropTypes.number,
  place: React.PropTypes.number
};

export default User;
