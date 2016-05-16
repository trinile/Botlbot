import React from 'react';
import {connect} from 'react-redux';
import TweetListContainer from '../containers/TweetListContainer';
import { authUser } from '../actions/Login';
import { getTweetsAsync } from '../actions/tweets';
import SideMenu from '../components/SideMenu';

class Dashboard extends React.Component {

  componentWillMount() {
    const { dispatch, isAuthenticated } = this.props;
    console.log('is user authenticated ----->', isAuthenticated);
    if (!isAuthenticated) {
      dispatch(authUser());
    }
      dispatch(getTweetsAsync());
  }

  render() {
    return (
      <TweetListContainer filter="SHOW_VALID" />
    );
  }
}

function mapStatetoProps(state) {
  return {
    isAuthenticated: state.authStatus
  };
}

export default connect(mapStatetoProps)(Dashboard);
