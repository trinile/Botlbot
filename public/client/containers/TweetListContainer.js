import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import TweetList from '../components/TweetList';
import { requestEdit, editTweet, cancelEditTweet } from '../actions/tweets';
import { postTweetAsync, editTweetAsync, trashTweetAsync, scheduleTweetAsync } from '../actions/tweets.js';
import { tweetsFilter } from '../actions/tweetsFilter';
import { push } from 'react-router-redux';
import { setSnackMessage } from '../actions/snack';

// TweetListContainer to be used for showing any list of tweets
// Tweets that will be displayed is determined by filter
const filterTweets = (tweets, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return tweets;
    case 'SHOW_AVAILABLE':
      return tweets.filter(t => t.tweet_status === 'available');
    case 'SHOW_POSTED':
      return tweets.filter(t => t.tweet_status === 'posted_in_db');
    case 'SHOW_SCHEDULED':
      return tweets.filter(t => t.tweet_status === 'scheduled_in_db');
    case 'SHOW_TRASHED':
      return tweets.filter(t => t.tweet_status === 'trashed');
    default:
      return tweets;
  }
};
class TweetListContainer extends React.Component {

  componentWillMount() {
    this.props.filterTweets();
  }

  render() {
    const {
      tweets,
      onPostTweet, 
      cancelEditTweet,
      onTrashTweet, 
      editTweet, 
      onRequestEdit,
      onScheduleTweet,
      redirectToScheduled,
      redirectToPosted,
      setSnackMessage,
       } = this.props;
    return (
      <TweetList 
        tweets={tweets} 
        onPostTweet={onPostTweet}
        onRequestEdit={onRequestEdit}
        cancelEditTweet={cancelEditTweet}
        onEditTweet={editTweet}
        onTrashTweet={onTrashTweet}
        onScheduleTweet={onScheduleTweet}
        redirectToScheduled={redirectToScheduled}
        redirectToPosted={redirectToPosted}
        setSnackMessage={setSnackMessage}
      />
    ) 
  }
}
const mapStateToProps = (state) => ({ 
  tweets: filterTweets(state.tweets, state.tweetsFilter)
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  filterTweets: () => dispatch(tweetsFilter(ownProps.filter)),
  editTweet: (id, bot_tweet_body) => dispatch(editTweetAsync(id, bot_tweet_body)),
  cancelEditTweet: (id) => dispatch(cancelEditTweet(id)),
  onRequestEdit: (id) => dispatch(requestEdit(id)),
  onPostTweet: (id) => dispatch(postTweetAsync(id)),
  onTrashTweet: (id) => dispatch(trashTweetAsync(id)),
  onScheduleTweet: (id, schedule) => dispatch(scheduleTweetAsync(id, schedule)),
  redirectToScheduled: () => dispatch(push('/scheduled')),
  redirectToPosted: () => dispatch(push('/posted')),
  setSnackMessage: (message) => dispatch(setSnackMessage(message)),
});

TweetListContainer.PropTypes = {
  tweets: PropTypes.arrayOf(React.PropTypes.object),
  onPostTweet: PropTypes.func,
  cancelEditTweet: PropTypes.func,
  onTrashTweet: PropTypes.func,
  editTweet: PropTypes.func,
  onRequestEdit: PropTypes.func,
  onScheduleTweet: PropTypes.func,
  redirectToScheduled: PropTypes.func,
  redirectToPosted: PropTypes.func,
  setSnackMessage: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetListContainer);
