import getUserPoints from './getUserPoints';

export default function getLeaders(results, bets) {
  let leaders = [];

  for (let bet of bets) {
    let user = {
      id: bet.id,
      name: bet.name,
      points: getUserPoints(results, bet.bets)
    };
    leaders.push(user);
  }

  return leaders.sort((u1, u2) => u2.points - u1.points).slice();
}
