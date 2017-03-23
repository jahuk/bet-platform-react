import React from 'react';
import {connect} from 'react-redux';
import * as AppActions from '../../actions/app.actions';
import Leaders from './../../components/leaders/Leaders';
import Results from '../../components/results/Results';

class Home extends React.Component {

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

Home.propTypes = {
  getResults: React.PropTypes.func
};

const mapDispatchToProps = {
  getResults: AppActions.getResults
};

export default connect(null, mapDispatchToProps)(Home);
