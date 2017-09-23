import React from 'react';

const MatchInfo = ({home, away, result}) => {
  return (
    <div className="alert alert-dismissible alert-info">
      <strong>{home} VS {away}</strong>
      <br/>score: {result}
    </div>
  );
};

MatchInfo.propTypes = {
  home: React.PropTypes.string,
  away: React.PropTypes.string,
  result: React.PropTypes.string
};

export default MatchInfo;
