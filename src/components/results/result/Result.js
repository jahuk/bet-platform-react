import React from 'react';
import {Link} from 'react-router';

const Result = ({id, home, homeGoals, away, awayGoals}) => (
  <tr>
    <td>{home}</td>
    <td>{homeGoals}</td>
    <td> -</td>
    <td>{awayGoals}</td>
    <td>{away}</td>
    <td><Link className="badge" to={{ pathname: `/match/${id}`}}>GO</Link></td>
  </tr>
);

Result.propTypes = {
  id: React.PropTypes.number,
  home: React.PropTypes.string,
  homeGoals: React.PropTypes.number,
  away: React.PropTypes.string,
  awayGoals: React.PropTypes.number
};

export default Result;
