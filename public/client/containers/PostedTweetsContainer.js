import React from 'react';
import { connect } from 'react-redux';
import { getPostedTweetsAsync } from '../actions/tweets';
import TweetListContainer from './TweetListContainer';

class PostedTweetsContainer extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPostedTweetsAsync());
  }

  // componentWiUnmount() {
  //   const tweets: state.tweets,

  // }

  render() {
    return (
      <main>
        <TweetListContainer filter="SHOW_POSTED"/>
      </main>

    );
  }
}

const mapStateToProps = (state) => ({
  tweets: state.tweets,
});

export default connect(mapStateToProps)(PostedTweetsContainer);
