import React from 'react';
import {connect} from 'react-redux';
import { getScheduledTweetsAsync } from '../actions/tweets';
import TweetListContainer from './TweetListContainer';

class ScheduledTweetsContainer extends React.Component {

  componentWillMount() {
    // console.log('mounting scheduled tweets container');
    const { dispatch } = this.props;
    dispatch(getScheduledTweetsAsync());
  }

  render() {
    return (
      <main>
        <TweetListContainer filter="SHOW_SCHEDULED"/>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  tweets: state.tweets,
});

export default connect(mapStateToProps)(ScheduledTweetsContainer);
