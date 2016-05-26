import { connect } from 'react-redux';
import React from 'react';
import TweetList from '../components/TweetList';
import { addTweets, postTweet, trashTweet, requestEdit, editTweet, cancelEditTweet} from '../actions/tweets';
import { postTweetAsync, getTweetsAsync, editTweetAsync, trashTweetAsync, scheduleTweetAsync } from '../actions/tweets.js';
import { tweetsFilter } from '../actions/TweetsFilter';
import { push } from 'react-router-redux';
import { setSnackMessage } from '../actions/snack';
//function that takes in tweet and filter action

const filterTweets = (tweets, filter) => {
  console.log('what is filter.........', filter);
  switch(filter) {
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
      getValidTweets, 
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetListContainer);

