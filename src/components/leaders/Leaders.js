import React from 'react';
import {connect} from 'react-redux';

const Leaders = ({results, bets}) => {

  console.log(results, bets);

  return (
    <div>
      <h2>Leaders:</h2>
      <table className="table users">
        <thead>
        <tr>
          <th/>
          <th>Name</th>
          <th>Points</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td><a className="user">Jan</a></td>
          <td><span className="badge">5</span></td>
        </tr>
        <tr>
          <td>2</td>
          <td><a className="user">Zbigniew</a></td>
          <td><span className="badge">4</span></td>
        </tr>
        <tr>
          <td>3</td>
          <td><a className="user">Krzychu</a></td>
          <td><span className="badge">2</span></td>
        </tr>
        <tr>
          <td>3</td>
          <td><a className="user">Wiesław</a></td>
          <td><span className="badge">2</span></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

Leaders.propTypes = {
  results: React.PropTypes.array
};

const mapStateToProps = ({results, bets}) => {
  return {
    results,
    bets
  };
};

export default connect(mapStateToProps)(Leaders);
