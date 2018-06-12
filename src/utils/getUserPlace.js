export default function getUserPlace(userPoints, usersPoints) {
  const userIndex = usersPoints.indexOf(userPoints);
  let places = [];
  let place = 1;
  let score = usersPoints[0];

  for (let [index, up] of usersPoints.entries()) {
    if (up === score) {
      places.push(place);
    } else {
      score = up;
      place = ++index;
      places.push(place);
    }
  }
  return places[userIndex];
}
