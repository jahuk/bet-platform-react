import getUserPoints from './getUserPoints';
import getUserPlace from './getUserPlace';

export default function getLeaders(results, bets) {
  let leaders = [];
  let sortedLeaders = [];

  for (let bet of bets) {
    let user = {
      id: bet.id,
      name: bet.name,
      points: getUserPoints(results, bet.bets),
      isPointsLive: results.some(result => result.status === 'IN_PLAY')
    };
    leaders.push(user);
  }

  sortedLeaders = leaders.sort((u1, u2) => u2.points - u1.points).slice();

  return sortedLeaders.map(user => ({...user, place: getUserPlace(user.points, sortedLeaders.map(user => user.points))}));
}
