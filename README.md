## Bet Platform AngularJS

A simple app to track bet results for UEFA EURO 2016. 

## Motivation

Learn AngularJS, track bet results and have fun. 

## How it works?

### Fixtures
* app use results from http://api.football-data.org/index,
* endpoint for UEFA EURO 2016 results: http://api.football-data.org/v1/soccerseasons/424/fixtures,
* example
```json
"_links": {
  "self": {
    "href": "http://api.football-data.org/v1/soccerseasons/424/fixtures"
  },
  "soccerseason": {
    "href": "http://api.football-data.org/v1/soccerseasons/424"
  }
},
"count": 51,
"fixtures": [
  {
    "_links": {
      "self": {
        "href": "http://api.football-data.org/v1/fixtures/149855"
      },
      "soccerseason": {
        "href": "http://api.football-data.org/v1/soccerseasons/424"
      },
      "homeTeam": {
        "href": "http://api.football-data.org/v1/teams/773"
      },
      "awayTeam": {
        "href": "http://api.football-data.org/v1/teams/811"
      }
    },
    "date": "2016-06-10T19:00:00Z",
    "status": "FINISHED",
    "matchday": 1,
    "homeTeamName": "France",
    "awayTeamName": "Romania",
    "result": {
      "goalsHomeTeam": 2,
      "goalsAwayTeam": 1,
      "halfTime": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 0
      } 
    }   
  } 
]
```
