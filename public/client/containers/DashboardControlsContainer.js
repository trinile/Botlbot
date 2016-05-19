import React from 'react';
import { connect } from 'react-redux';
import { incrementPage, decrementPage, resetPage } from '../actions/page';
import { getTweetsAsync } from '../actions/tweets';
import DashboardControls from '../components/DashboardControls';

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
