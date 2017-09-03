import React from 'react';

const UserInfo = ({name, points}) => {
  return (
    <div className="alert alert-dismissible alert-info">
      <strong>{name}</strong>
      <br/>score: {points}
    </div>
  );
};

UserInfo.propTypes = {
  name: React.PropTypes.string,
  points: React.PropTypes.number
};

export default UserInfo;
