import React, { PropTypes } from 'react';
import styles from '../styles/tweet.css';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Repeat from 'material-ui/svg-icons/av/repeat';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Launch from 'material-ui/svg-icons/action/launch';
import moment from 'moment';

const style = {
  main: {
    margin: '16px 32px 16px 0',
    width: '40%',
    float: 'right',
    padding: '10px',
    // background: '#879C87',
  },
  tweet: {
    boxShadowing: '',
    padding: '5px',
    margin: '10px',
    // color: '#879C87',
    backgroundColor: 'white',
    position: 'relative',
    border: '1px dash #ddd',
  },
  paper: {
    padding: '5px',
    margin: '10px',
    position: 'relative',
  },
  favorite: {
    fill: 'red'
  },
  retweet: {
    fill: 'blue'
  },
  icon: {
    display: 'inline-block',
    boxShadow: '0px',
    backgroundColor: '',
    fill: '#879C87',
  },
  div: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '5px',
    margin: '10px',
  },
  text: {
    width: '80%',
    display: 'inline-block',
  },
  align: {
    display: 'flex',
    alignItems: 'center',
  },
  launch: {
    fill: 'black',
    color: 'black',
  },
  p: {
    paddingLeft: '10px',
  },
};

const PostedTweet = ({ tweet }) => {
  const getTime = () => {
    return moment(tweet.created_at).calendar();
  }
  return (
    <Card style={style.main}>
      <CardHeader
        style={style.div}
        title="Posted to Twitter"
        subtitle={getTime()}
        avatar="http://lorempixel.com/100/100/nature/"
      >
      <FloatingActionButton
        mini={true}
        linkButton={true}
        href={tweet.tweet_text}
        style={style.icon}
        backgroundColor="white"
        iconStyle={style.launch}
        >
        <Launch/>
      </FloatingActionButton>

      </CardHeader>
      <Paper style={style.paper}>
      <p style={style.p}>{tweet.tweet_text}</p>
        <div style={style.div}>
          <div style={style.align}><Repeat style={style.retweet}/> {tweet.retweet_count} </div>
          <div style={style.align}><Favorite style={style.favorite}/> {tweet.favorite_count}</div>
        </div>
      </Paper>
    </Card>
  );
};

PostedTweet.propTypes = {
  tweet: PropTypes.object,
};

export default PostedTweet;

