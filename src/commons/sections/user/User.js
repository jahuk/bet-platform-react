import React from 'react';
import {connect} from 'react-redux';
import Back from './../../../components/back/Back';
import UserBets from './../../../components/userBets/UserBets';

const User = ({leaders, results, bets, location}) => {
  const userId = parseInt(location.pathname.split('/').pop());
  return (
    <div>
      <Back/>
      <UserBets leaders={leaders} results={results} bets={bets} userId={userId} />
    </div>
  );
};

User.propTypes = {
  leaders: React.PropTypes.array,
  results: React.PropTypes.array,
  bets: React.PropTypes.array,
  location: React.PropTypes.object
};

const mapStateToProps = ({leaders, results, bets}) => ({leaders, results, bets});

export default connect(mapStateToProps)(User);
