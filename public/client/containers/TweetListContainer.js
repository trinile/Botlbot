import { connect } from 'react-redux';
import TweetList from '../components/TweetList';
import { addTweets } from '../actions/tweets';

const mapStateToProps = (state) => ({ tweets: state.tweets });
const mapDispatchToProps = (dispatch) => ({
  onGetTweets: (tweets) => {
    dispatch(addTweets(tweets));
  },
});


const TweetListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList);

export default TweetListContainer;
