import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from '../styles/main.css';
import Tweet from './Tweet';

import Logout from './Logout';

class Dashboard extends Component {

  componentWillMount() {

  }

  showTweets() {
    //TODO: click button will call this function show Tweets
    //this will dispatch an action -> change the state 
    //where Tweet components are shown
  }

  render() {
    return (
      <div>
        <Logout/>
        <button>Click for More Tweets</button>
        <Tweet/>
      </div>
    );
  }
}

//TODO: on click function will display Tweet Components (5)
//CHANGES THE STATE OF TWEETS { showTweets: [ ]}
export default Dashboard;
