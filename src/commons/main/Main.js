import React from 'react';
import {connect} from 'react-redux';
import * as AppActions from '../../actions/app.actions';

class Main extends React.Component {

  componentDidMount(){
    this.props.getResults();
  }

  render() {
    return (
      <main>
        <h1>React Bet App</h1>
        <section>
          {this.props.children}
        </section>
      </main>
    );
  }

}

Main.propTypes = {
  children: React.PropTypes.object
};

const mapDispatchToProps = {
  getResults: AppActions.getResults
};

export default connect(null, mapDispatchToProps)(Main);
