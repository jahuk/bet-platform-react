import React from 'react';
import {Link} from 'react-router';

const Back = () => (
  <div className="btn btn-default back-to-dashboard">
    <Link to={'/'}>Back to dashboard</Link>
  </div>
);

export default Back;
