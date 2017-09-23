import React from 'react';
import {connect} from 'react-redux';
import Back from './../../../components/back/Back';
import MatchBets from './../../../components/matchBets/MatchBets';

const Match = ({leaders, results, bets}) => {
  const matchId = parseInt(location.pathname.split('/').pop());
  return (
    <div>
      <Back/>
      <MatchBets leaders={leaders} results={results} bets={bets} matchId={matchId} />
    </div>
  );
};

const mapStateToProps = ({leaders, results, bets}) => ({leaders, results, bets});

export default connect(mapStateToProps)(Match);
