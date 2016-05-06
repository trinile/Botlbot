import { connect } from 'react-redux';
import TweetList from '../components/TweetList';

const mapStateToProps = (state) => ({ tweets: state.tweets });

const TweetListContainer = connect(mapStateToProps)(TweetList);

export default TweetListContainer;
