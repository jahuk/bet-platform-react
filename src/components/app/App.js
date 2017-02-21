import React from 'react';
import {connect} from 'react-redux';

import Leaders from './../leaders/Leaders';
import Scores from '../scores/Scores';
import * as AppActions from '../../actions/app.actions';

class App extends React.Component {

  componentDidMount() {
    this.props.getResults();
  }

  render() {
    return (
      <div>
        <Leaders />
        <Scores />
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
