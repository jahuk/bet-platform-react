import React from 'react';
import {Link} from 'react-router';

const Result = ({id, home, away, status, result}) => (
  <tr className={status === 'IN_PLAY' ? 'live' : ''}>
    <td>{home}</td>
    <td>{result}</td>
    <td>{away}</td>
    <td><Link className="badge more" to={{pathname: `/match/${id}`}}>more</Link></td>
  </tr>
);

Result.propTypes = {
  id: React.PropTypes.number,
  home: React.PropTypes.string,
  away: React.PropTypes.string,
  status: React.PropTypes.string,
  result: React.PropTypes.string
};

export default Result;
