import { connect } from 'react-redux';
import TweetList from '../components/TweetList';
import { addTweets, postTweet, trashTweet } from '../actions/tweets';

const mapStateToProps = (state) => ({ tweets: state.tweets });
const mapDispatchToProps = (dispatch) => ({
  onGetTweets: (tweets) => {
    dispatch(addTweets(tweets));
  },
  onPostTweet: (id) => {
    dispatch(postTweet(id));
  },
  onTrashTweet: (id) => {
    dispatch(trashTweet(id));
  },
});

const TweetListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList);

export default TweetListContainer;
