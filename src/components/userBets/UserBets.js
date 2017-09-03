import React from 'react';
import UserInfo from './UserInfo';
import UserList from './UserList';

const UserBets = ({leaders, results, userId}) => {

  const {points, name} = leaders.length > 0 && leaders.find((user) => user.id === userId);

  return (
    <div>
      <UserInfo name={name} points={points} />
      <UserList/>
    </div>
  );
};

UserBets.propTypes = {
  leaders: React.PropTypes.array,
  results: React.PropTypes.array,
  userId: React.PropTypes.number
};

export default UserBets;
