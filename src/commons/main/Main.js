import React from 'react';
import {connect} from 'react-redux';
import * as AppActions from '../../actions/app.actions';

class Main extends React.Component {

  componentDidMount(){
    this.props.getData();
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
  getData: React.PropTypes.func,
  children: React.PropTypes.object
};

const mapDispatchToProps = {
  getData: AppActions.getData
};

export default connect(null, mapDispatchToProps)(Main);
