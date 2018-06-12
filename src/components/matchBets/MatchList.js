import React from 'react';
import User from './user/User';
import getMatchPoints from '../../utils/getMatchPoints';

const sortBets = (bet1, bet2) => {
  const bet1points = bet1.props.points;
  const bet2points = bet2.props.points;

  if (bet1points < bet2points) {
    return 1;
  } else if (bet1points > bet2points) {
    return -1;
  } else {
    return 0;
  }
};

const MatchList = ({results, bets, matchId}) => {

  return (

    <table className="table match">
      <thead>
      <tr>
        <th>Name</th>
        <th>Bet</th>
        <th>Points</th>
        <th/>
      </tr>
      </thead>
      <tbody>

      {
        bets.map((bet, i) => {
          const matchBet = bet.bets[matchId].bet;
          const matchResult = results[matchId].result;
          const matchDay = results[matchId].matchday;
          const points = getMatchPoints(matchResult, matchBet, matchDay);
          const isLive = results[matchId].status === 'IN_PLAY';

          return (
            <User key={i} id={i} name={bet.name} bet={matchBet} points={points} isLive={isLive} />
          );
        }).sort(sortBets)
      }

      </tbody>
    </table>

  );
};

MatchList.propTypes = {
  results: React.PropTypes.array,
  bets: React.PropTypes.array,
  matchId: React.PropTypes.number
};

export default MatchList;
