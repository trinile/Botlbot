import React from 'react';
import {connect} from 'react-redux';
import TweetListContainer from '../containers/TweetListContainer';
import { receiveLogin, loginError, authUser } from '../actions/Login';
// import { authUser } from '../actions/Login';
import SideMenu from '../components/SideMenu';

class PostedTweets extends React.Component {

  componentWillMount() {
  }

  render() {
    return (
      <main>
        <TweetListContainer filter="SHOW_POSTED" />
      </main>

    );
  }
}

export default PostedTweets;
