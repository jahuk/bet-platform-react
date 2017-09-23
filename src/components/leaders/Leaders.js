import React from 'react';
import User from './user/User';

const Leaders = ({leaders}) => {
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

        { leaders.map((user, i) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            points={user.points}
            place={++i} />
        ))}

        </tbody>
      </table>
    </div>
  );
};

Leaders.propTypes = {
  leaders: React.PropTypes.array
};

export default Leaders;
