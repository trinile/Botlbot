import React from 'react';
import {connect} from 'react-redux';
import TweetListContainer from '../containers/TweetListContainer';
import { receiveLogin } from '../actions/Login';

class Dashboard extends React.Component {

  componentWillMount() {
    this.authUser();
  }
  componentWillReceiveProps(nextProps) {
    this.authUser();
  }

  authUser() {
    const { dispatch, isAuthenticated } = this.props;
      dispatch(receiveLogin());
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
  const { authStatus } = state;
  const { isAuthenticated } = authStatus;
  return {
    isAuthenticated
  };
}

export default connect(mapStatetoProps)(Dashboard);
