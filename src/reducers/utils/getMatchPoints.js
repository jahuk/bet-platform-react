const MAX_POINTS = 3;
const MID_POINTS = 2;
const MIN_POINTS = 1;
const MULTIPLIER_POINTS = 2;

export default function getMatchPoints(result, bet, matchday) {
  let points = 0;

  if (bet === '-') {
    points = 0;
  } else if (bet === result) {
    points = MAX_POINTS;
  } else {

    let betHomeGoals = parseInt(bet[0]);
    let betAwayGoals = parseInt(bet[2]);
    let resultHomeGoals = parseInt(result[0]);
    let resultAwayGoals = parseInt(result[2]);
    let winnerResult;
    let winnerBet;

    // result
    if (resultHomeGoals > resultAwayGoals) {
      winnerResult = 'home';
    } else if (resultHomeGoals === resultAwayGoals) {
      winnerResult = 'none';
    } else {
      winnerResult = 'away';
    }

    // bet
    if (betHomeGoals > betAwayGoals) {
      winnerBet = 'home';
    } else if (betHomeGoals === betAwayGoals) {
      winnerBet = 'none';
    } else {
      winnerBet = 'away';
    }

    if (winnerResult === winnerBet) {

      // with winner
      if (winnerResult === 'home' || winnerResult === 'away') {

        let betGoalsDiff = betHomeGoals - betAwayGoals;
        let resultGoalsDiff = resultHomeGoals - resultAwayGoals;

        if (betGoalsDiff === resultGoalsDiff) {
          points = MID_POINTS;
        }
        else {
          points = MIN_POINTS;
        }

      }
      // without winner - draw
      else {
        let betGoals = betHomeGoals;
        let resultGoals = resultHomeGoals;
        let goalsDifference = betGoals - resultGoals;

        if (goalsDifference === -1 || goalsDifference === 1) {
          points = MID_POINTS;
        }
        else {
          points = MIN_POINTS;
        }
      }

      // without winner

    } else {
      points = 0;
    }
  }

  if (matchday > 3) {
    points *= MULTIPLIER_POINTS;
  }

  return points;
}
