import React from 'react';
import {connect} from 'react-redux';
import Result from './result/Result';

const Results = ({results}) => {
  return results.length > 0 ? (
      <div>
        <h2>Results:</h2>
        <table className="table results">
          <tbody>
          {results.map((result, i) =>
            <Result
              home={result.homeTeamName}
              homeGoals={result.result.goalsHomeTeam}
              away={result.awayTeamName}
              awayGoals={result.result.goalsAwayTeam}
              key={i}/>
          )}
          </tbody>
        </table>
      </div>
    ) : null;
};

Results.propTypes = {
  results: React.PropTypes.array
};

const mapStateToProps = ({scores: {results}}) => {
  return {
    results: results
  };
};

export default connect(mapStateToProps)(Results);
