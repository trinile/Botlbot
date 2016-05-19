import React, { PropTypes } from 'react';
import styles from '../styles/tweet.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Repeat from 'material-ui/svg-icons/av/repeat';
import Favorite from 'material-ui/svg-icons/action/favorite';
import { Launch } from './TweetButtons';
import Paper from 'material-ui/Paper';

const style = {
  news: {
    display: 'flex',
    borderRadius: '4px',
    justifyContent: 'space-around',
    color: '#879C87',
    paddingLeft: '10px',
    margin: '10px',
  },
  div: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '5px',
  },
  text: {
    width: '80%',
    display: 'inline-block',
  },
  align: {
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    borderRadius: '4px',
    boxShadowing: '',
    padding: '5px',
    margin: '10px',
    color: '#879C87',
    position: 'relative',
  },
};

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
    style={style.paper}
    zDepth={1}
    > 
      <div style={style.div}>
        <span style={style.text}>{tweet.tweet_text} </span>
        <Launch tweet={tweet}/>
      </div>
      <div style={style.div}>
        <div style={style.align}><Repeat style={style.retweet} /> {tweet.retweet_count} </div>
        <div style={style.align}><Favorite style={style.favorite} /> {tweet.favorite_count}</div>
      </div>
      <div style={style.div}>
        <div>{tweet.user_screen_name}</div>
        <div>Followers: {tweet.user_followers_count}</div>
      </div>
    </Paper>
  );
}
