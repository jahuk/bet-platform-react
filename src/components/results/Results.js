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
            key={i}
            id={i}
            home={result.home}
            away={result.away}
            result={result.result}
          />
        )}
        </tbody>
      </table>
    </div>
  ) : null;
};

Results.propTypes = {
  results: React.PropTypes.array
};

const mapStateToProps = ({results}) => {
  return {results};
};

export default connect(mapStateToProps)(Results);
