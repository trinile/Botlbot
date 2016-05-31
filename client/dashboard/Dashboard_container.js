import React from 'react';
import { connect } from 'react-redux';
import TweetListContainer from '../tweets/Tweets_container_TweetList';
import { authUser } from '../auth/Auth_actions_login';
import { getTweetsAsync } from '../tweets/Tweets_actions_getTweets';
import { getTemplateNamesAsync } from '../template/Template_actions';
import { resetPage } from '../pagination/Pagination_actions';
// import SideMenu from '../sidemenu/SideMenu_component';
import DashboardControlsContainer from './Dashboard_container_Controls';

class Dashboard extends React.Component {

  componentWillMount() {
    const { dispatch, isAuthenticated } = this.props;
    console.log('is user authenticated ----->', isAuthenticated);
    if (!isAuthenticated) {
      dispatch(authUser());
    }
    dispatch(resetPage());
    dispatch(getTweetsAsync());
    dispatch(getTemplateNamesAsync());
  }
  
  render() {
    return (
      <div>
        <DashboardControlsContainer />
        <TweetListContainer filter="SHOW_AVAILABLE" />
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    isAuthenticated: state.authStatus,
  };
}

export default connect(mapStatetoProps)(Dashboard);
