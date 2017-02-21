export const URLS = {
  LIVE: {
    FIXTURES: 'http://api.football-data.org/v1/soccerseasons/424/fixtures',
    TOKEN: 'd6d13ff9c73843b8ac45326b4d7b88d9'
  },
  MOCK: {
    FIXTURES: 'data/fixtures/fixtures-final.json',
    TOKEN: ''
  }
};

export const SETTINGS = {
  headers: {'X-Auth-Token': URLS.LIVE.TOKEN},
  dataType: 'json',
  method: 'GET'
};
