import React from 'react';
import { connect } from 'react-redux';
import TweetListContainer from '../tweets/Tweets_container_TweetList';
import { authUser } from '../auth/Auth_actions_login';
import { getTweetsAsync } from '../tweets/Tweets_actions_getTweets';
import { getTemplateNamesAsync } from '../template/Template_actions';
import { resetPage } from '../pagination/Pagination_actions';
// import SideMenu from '../sidemenu/SideMenu_component';
import DashboardControlsContainer from './Dashboard_container_Controls';
import EmptyList from './Dashboard_component_EmptyList';
class Dashboard extends React.Component {

  componentWillMount() {
    const { dispatch, isAuthenticated } = this.props;
    if (!isAuthenticated) {
      dispatch(authUser());
    }
    dispatch(resetPage());
    dispatch(getTweetsAsync());
    dispatch(getTemplateNamesAsync());
  }

  render() {
    const { tweets } = this.props;
    return (
      <div>
        <DashboardControlsContainer />
        { tweets.length === 0 ? <EmptyList/> : null }
        <TweetListContainer filter="SHOW_AVAILABLE"/>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    isAuthenticated: state.authStatus,
    tweets: state.tweets,
  };
}

export default connect(mapStatetoProps)(Dashboard);
