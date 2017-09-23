import getMatchPoints from './getMatchPoints';

export default function calculateUserPoints(results, bets) {
  let userPoints = 0;

  for (let bet of bets) {
    let result = results[bet.id];
    if (result) {
      userPoints += getMatchPoints(result.result, bet.bet, result.matchday);
    }
  }

  return userPoints;
}
