import React from 'react';
import {Link} from 'react-router';

const User = ({id, name, points, isPointsLive, place}) => (
  <tr className={`place${place}`}>
    <td><span className="badge leaders">{place}</span></td>
    <td><a className="user">{name}</a></td>
    <td><span className="badge">{points}</span></td>
    <td>
      {isPointsLive && <span className="badge live">LIVE</span>} &nbsp;
      <Link className="badge more" to={{pathname: `/user/${id}`}}>more</Link>
    </td>
  </tr>
);

User.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  points: React.PropTypes.number,
  isPointsLive: React.PropTypes.bool,
  place: React.PropTypes.number
};

export default User;
