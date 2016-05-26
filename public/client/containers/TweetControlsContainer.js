import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { TweetControls } from '../components/TweetControls';
import { setSnackMessage } from '../actions/snack';
import { push } from 'react-router-redux';
import { trashTweetAsync, scheduleTweetAsync, editTweetAsync, postTweetAsync } from '../actions/tweets';
import { push } from 'react-router-redux';

const mapStateToProps = (state) => ({
  tweets: state.tweets,
});

const mapDispatchToProps = (dispatch) => ({
  editTweet: (id, bot_tweet_body) => dispatch(editTweetAsync(id, bot_tweet_body)),
  cancelEditTweet: (id) => dispatch(cancelEditTweet(id)),
  onRequestEdit: (id) => dispatch(requestEdit(id)),
  onPostTweet: (id) => dispatch(postTweetAsync(id)),
  onTrashTweet: (id) => dispatch(trashTweetAsync(id)),
  onScheduleTweet: (id, schedule) => dispatch(scheduleTweetAsync(id, schedule)),
  postTweet: (id) => dispatch(postTweetAsync(id)),
  setSnackMessage: (message) => dispatch(setSnackMessage(message)),
  redirectToScheduled: () => dispatch(push('/scheduled')),
  redirectToPosted: () => dispatch(push('/posted')),
});

const TweetControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetControls);

export default TweetControlsContainer;