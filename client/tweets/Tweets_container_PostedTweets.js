import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPostedTweetsAsync } from './Tweets_actions_getTweets';
import TweetListContainer from './Tweets_container_TweetList';

class PostedTweetsContainer extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getPostedTweetsAsync());
  }

  render() {
    return (
      <main>
        <TweetListContainer filter="SHOW_POSTED" />
      </main>

    );
  }
}

const mapStateToProps = (state) => ({
  tweets: state.tweets,
});

PostedTweetsContainer.PropTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PostedTweetsContainer);
