import React, { PropTypes } from 'react';
import style from '../styles/tweet.js';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Repeat from 'material-ui/svg-icons/av/repeat';
import Favorite from 'material-ui/svg-icons/action/favorite';
import { Launch } from './TweetButtons';
import Paper from 'material-ui/Paper';

export const NewsSource = ({tweet}) => {
  return (
    <Paper
      style={style.news}
      zDepth={1}
      >
        <h4 style={style.text}>{tweet.news_headline}</h4>
        <Launch tweet={tweet}/>
    </Paper>
  );
};

export const TweetSource = ({tweet}) => {
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
}
