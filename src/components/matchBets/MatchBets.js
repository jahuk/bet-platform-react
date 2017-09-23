import React from 'react';
import MatchInfo from './MatchInfo';
import MatchList from './MatchList';

const MatchBets = ({results, bets, matchId}) => {

  const {home, away, result} = results.length > 0 && results[matchId];

  return (
    <div>
      <MatchInfo home={home} away={away} result={result} />
      <MatchList results={results} bets={bets} matchId={matchId} />
    </div>
  );
};

MatchBets.propTypes = {
  results: React.PropTypes.array,
  bets: React.PropTypes.array,
  matchId: React.PropTypes.number
};

export default MatchBets;
