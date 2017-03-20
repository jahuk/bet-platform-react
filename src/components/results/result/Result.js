import React from 'react';

const Result = ({home, homeGoals, away, awayGoals}) => {
  return (
    <tr>
      <td>{home}</td>
      <td>{homeGoals}</td>
      <td> - </td>
      <td>{awayGoals}</td>
      <td>{away}</td>
    </tr>
  );
};

Result.propTypes = {
  home: React.PropTypes.string,
  homeGoals: React.PropTypes.number,
  away: React.PropTypes.string,
  awayGoals: React.PropTypes.number
};

export default Result;
