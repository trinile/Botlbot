import React, { PropTypes} from 'react';
import { connect } from 'react-redux';
import { getScheduledTweetsAsync } from './Tweets_actions_getTweets';
import TweetListContainer from './Tweets_container_TweetList';

class ScheduledTweetContainer extends React.Component {

  componentWillMount() {
    // console.log('mounting scheduled tweets container');
    const { dispatch } = this.props;
    dispatch(getScheduledTweetsAsync());
  }

  render() {
    return (
      <main>
        <TweetListContainer filter="SHOW_SCHEDULED" />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  tweets: state.tweets,
});

ScheduledTweetContainer.PropTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ScheduledTweetContainer);
