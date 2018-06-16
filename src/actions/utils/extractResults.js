const getResult = (result, status) => {
  if (result.goalsHomeTeam === null && result.goalsAwayTeam === null && status === 'IN_PLAY') {
    return '0-0';
  } else if (result.goalsHomeTeam !== null && result.goalsAwayTeam !== null) {
    return `${result.goalsHomeTeam}-${result.goalsAwayTeam}`;
  } else {
    return '';
  }
};

export default function extractResults(results) {
  let extractedResults = [];

  for (let result of results[0].fixtures) {
    extractedResults.push({
      home: result.homeTeamName,
      away: result.awayTeamName,
      matchday: result.matchday,
      status: result.status,
      result: getResult(result.result, result.status)
    });
  }

  return extractedResults;
}
