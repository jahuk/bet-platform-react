import React from 'react';
import MatchInfo from './MatchInfo';
import List from './List';

const MatchBets = ({leaders, results, bets, matchId}) => {

  const {home, away, result} = results.length > 0 && results[matchId];

  return (
    <div>
      <MatchInfo home={home} away={away} result={result} />
      <List/>
    </div>
  )
};

MatchBets.propTypes = {
  leaders: React.PropTypes.array,
  results: React.PropTypes.array,
  bets: React.PropTypes.array,
  matchId: React.PropTypes.number
};

export default MatchBets;
