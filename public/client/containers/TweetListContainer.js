import { connect } from 'react-redux';
import React from 'react';
import TweetList from '../components/TweetList';
import { addTweets, postTweet, trashTweet, requestEdit, editTweet, cancelEditTweet} from '../actions/tweets';
import { postTweetAsync, getTweetsAsync, editTweetAsync, trashTweetAsync, scheduleTweetAsync } from '../actions/tweets.js';
import { tweetsFilter } from '../actions/TweetsFilter';
//function that takes in tweet and filter action

const filterTweets = (tweets, filter) => {
  console.log('what is filter.........', filter);
  switch(filter) {
    case 'SHOW_ALL':
      return tweets;
    case 'SHOW_VALID':
      return tweets.filter(t => t.tweet_status === 'available');
    case 'SHOW_POSTED':
      return tweets.filter(t => t.tweet_status === 'posted');
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
    const {tweets, 
      onPostTweet, 
      cancelEditTweet, 
      onTrashTweet, 
      getValidTweets, 
      editTweet, 
      onRequestEdit,
      onScheduleTweet } = this.props;
    return (
      <TweetList 
      tweets={tweets} 
      onPostTweet={onPostTweet}
      onRequestEdit={onRequestEdit}
      cancelEditTweet={cancelEditTweet}
      onEditTweet={editTweet}
      onTrashTweet={onTrashTweet}
      onScheduleTweet={onScheduleTweet}
      // getValidTweets={getValidTweets}
      />
    ) 
  }
}
const mapStateToProps = (state) => ({ 
  tweets: filterTweets(state.tweets, state.tweetsFilter)
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  filterTweets: () => {
    dispatch(tweetsFilter(ownProps.filter));
  },
  editTweet: (id, tweet_text) => {
    dispatch(editTweetAsync(id, tweet_text));
  },
  cancelEditTweet: (id) => {
    console.log('eddddddittttt tweet');
    dispatch(cancelEditTweet(id));
  },
  onRequestEdit: (id) => {
    dispatch(requestEdit(id));
  },
  onPostTweet: (id) => {
    dispatch(postTweetAsync(id));
  },
  onTrashTweet: (id) => {
    dispatch(trashTweetAsync(id));
  },
  onScheduleTweet: (id, schedule) => {
    console.log('innnnnnnnnnnn schedule');
    dispatch(scheduleTweetAsync(id, schedule))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetListContainer);

