import React from 'react';
import {connect} from 'react-redux';
import Back from './../../../components/back/Back';
import MatchBets from './../../../components/matchBets/MatchBets';

const Match = ({results, bets}) => {
  const matchId = parseInt(location.pathname.split('/').pop());
  return (
    <div>
      <Back/>
      <MatchBets results={results} bets={bets} matchId={matchId} />
    </div>
  );
};

Match.propTypes = {
  results: React.PropTypes.array,
  bets: React.PropTypes.array
};

const mapStateToProps = ({results, bets}) => ({results, bets});

export default connect(mapStateToProps)(Match);
