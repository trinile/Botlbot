import React from 'react';
import {connect} from 'react-redux';
import { getScheduledTweetsAsync }from '../actions/tweets';
import TweetListContainer from './TweetListContainer';

class ScheduledTweetsContainer extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    console.log('getting scheduled tweets -----> ----> ');
    dispatch(getScheduledTweetsAsync());
  }

  render() {
    const { tweets } = this.props;
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

// const mapDispatchToProps = (dispatch) => ({
//   getPostedTweetsAsync: () => {
//     dispatch(getPostedTweetsAsync())
//   }
// });

export default connect(mapStateToProps)(ScheduledTweetsContainer);
