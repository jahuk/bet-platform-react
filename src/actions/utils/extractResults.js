export default function extractResults(results) {
  let extractedResults = [];

  for (let result of results[0].fixtures) {
    extractedResults.push({
      home: result.homeTeamName,
      away: result.awayTeamName,
      matchday: result.matchday,
      status: result.status,
      result: (result.result.goalsHomeTeam) === null ? '' : `${result.result.goalsHomeTeam}-${result.result.goalsAwayTeam}`
    });
  }

  return extractedResults;
}
