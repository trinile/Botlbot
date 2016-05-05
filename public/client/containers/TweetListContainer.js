import { connect } from 'react-redux';
import TweetsList from '../components/TweetsList';

const mapStateToProps = (state) => ({ tweets: state.tweets });

const TweetListContainer = connect(mapStateToProps)(TweetsList);

export default TweetListContainer;
