export default {
  URLS: {
    LIVE: {
      FIXTURES: 'http://api.football-data.org/v1/soccerseasons/424/fixtures',
      TOKEN: 'd6d13ff9c73843b8ac45326b4d7b88d9'
    },
    MOCK: {
      FIXTURES: 'data/fixtures/fixtures-final.json',
      TOKEN: ''
    }
  },
  SETTINGS: {
    headers: {'X-Auth-Token': 'd6d13ff9c73843b8ac45326b4d7b88d9'},
    dataType: 'json',
    method: 'GET'
  }
};
