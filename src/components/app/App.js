import React from 'react';
import {connect} from 'react-redux';

import Leaders from './../leaders/Leaders';
import Results from '../results/Results';
import * as AppActions from '../../actions/app.actions';

class App extends React.Component {

  componentDidMount() {
    this.props.getResults();
  }

  render() {
    return (
      <div>
        <Leaders />
        <Results />
      </div>
    );
  }
}

App.propTypes = {
  getResults: React.PropTypes.func
};

const mapDispatchToProps = {
  getResults: AppActions.getResults
};

export default connect(null, mapDispatchToProps)(App);
