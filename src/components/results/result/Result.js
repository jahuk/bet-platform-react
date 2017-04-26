import React from 'react';
import {Link} from 'react-router';

const Result = ({id, home, away, result}) => (
  <tr>
    <td>{home}</td>
    <td>{result}</td>
    <td>{away}</td>
    <td><Link className="badge" to={{pathname: `/match/${id}`}}>GO</Link></td>
  </tr>
);

Result.propTypes = {
  id: React.PropTypes.number,
  home: React.PropTypes.string,
  away: React.PropTypes.string,
  result: React.PropTypes.string
};

export default Result;
