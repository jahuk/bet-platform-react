import React from 'react';
import {connect} from 'react-redux';

import Leaders from './../../../components/leaders/Leaders';
import Results from '../../../components/results/Results';

const Home = ({leaders, results}) => (
  <div>
    <Leaders leaders={leaders} />
    <Results results={results} />
  </div>
);

Home.propTypes = {
  leaders: React.PropTypes.array,
  results: React.PropTypes.array,
};

const mapStateToProps = ({leaders, results}) => ({leaders, results});

export default connect(mapStateToProps)(Home);
