import React from 'react';
import {connect} from 'react-redux';
import TweetListContainer from '../containers/TweetListContainer';
import { receiveLogin, loginError, authUser } from '../actions/Login';
// import { authUser } from '../actions/Login';
import SideMenu from '../components/SideMenu';

class Dashboard extends React.Component {

  componentWillMount() {
    const { dispatch, isAuthenticated } = this.props;
    if (!isAuthenticated) {
      dispatch(authUser());
    }
  }

  render() {
    return (
      <main>
        <TweetListContainer />
      </main>

    );
  }
}

function mapStatetoProps(state) {
  return {
    isAuthenticated: state.authStatus
  };
}

export default connect(mapStatetoProps)(Dashboard);
