import React, { PropTypes } from 'react';
import style from './styles/Tweets_styles.js';
import Repeat from 'material-ui/svg-icons/av/repeat';
import Favorite from 'material-ui/svg-icons/action/favorite';
import { Launch } from './Tweets_component_TweetButtons';
import Paper from 'material-ui/Paper';

// this component shows information for tweets generated from Twitter sources
// it includes retweet, favorites, original link, etc of original tweet

const TwitterSource = ({ tweet }) => {
  return (
    <Paper
      style={style.tweetsource}
      zDepth={1}
    > 
      <div style={style.div}>
        <span style={style.text}>{tweet.tweet_text} </span>
        <Launch tweet={tweet}/>
      </div>
      <div style={style.div}>
        <div style={style.align}><Repeat style={style.tweetIcon} /> {tweet.retweet_count} </div>
        <div style={style.align}><Favorite style={style.tweetIcon} /> {tweet.favorite_count}</div>
      </div>
      <div style={style.div}>
        <div>{tweet.user_screen_name}</div>
        <div>Followers: {tweet.user_followers_count}</div>
      </div>
    </Paper>
  );
};

TwitterSource.PropTypes = {
  tweet: PropTypes.object,
};

export default TwitterSource;
