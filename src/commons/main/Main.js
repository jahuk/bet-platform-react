import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as AppActions from '../../actions/app.actions';

class Main extends React.Component {

  componentDidMount(){
    this.props.getData();
  }

  render() {
    return (
      <main>
        <Link to={'/'}><h1 className="logo"><img src="http://m18.knigawka.com/assets/logo.png" alt="" /></h1></Link>
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
