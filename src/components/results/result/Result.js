import React from 'react';
import {Link} from 'react-router';

const Result = ({id, home, away, status, result}) => (
  <tr>
    <td>{home}</td>
    <td>{result}</td>
    <td>{away}</td>
    <td>{status === 'IN_PLAY' && <span className="badge live">LIVE</span>} &nbsp; <Link className="badge more" to={{pathname: `/match/${id}`}}>more</Link></td>
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
