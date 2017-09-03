import React from 'react';
import {connect} from 'react-redux';
import Back from './../../../components/back/Back';
import UserBets from './../../../components/userBets/UserBets';

const User = ({leaders, results, location}) => {
  const userId = location.pathname.split('/').pop();
  return (
    <div>
      <Back/>
      <UserBets leaders={leaders} results={results} userId={userId} />
    </div>
  );
};

User.propTypes = {
  leaders: React.PropTypes.array,
  results: React.PropTypes.array,
  location: React.PropTypes.object
};

const mapStateToProps = ({leaders, results}) => ({leaders, results});

export default connect(mapStateToProps)(User);
