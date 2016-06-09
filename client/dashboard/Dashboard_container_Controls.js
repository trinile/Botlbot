import React from 'react';
import { connect } from 'react-redux';
import { incrementPage, decrementPage, resetPage } from '../pagination/Pagination_actions';
import { getTweetsAsync } from '../tweets/Tweets_actions_getTweets';
import DashboardControls from './Dashboard_component_Controls';

const mapStateToProps = (state) => ({
  page: state.page,
  tweets: state.tweets
});

const mapDispatchToProps = (dispatch) => ({
  incrementPage: () => dispatch(incrementPage()),
  decrementPage: () => dispatch(decrementPage()),
  resetPage: () => dispatch(resetPage()),
  refreshTweets: (page) => dispatch(getTweetsAsync(page))
});

const DashboardControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardControls);

export default DashboardControlsContainer;
