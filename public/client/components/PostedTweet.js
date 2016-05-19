import React, { PropTypes } from 'react';
import styles from '../styles/tweet.css';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Repeat from 'material-ui/svg-icons/av/repeat';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Launch from 'material-ui/svg-icons/action/launch';

const style = {
  main: {
    margin: '16px 32px 16px 0',
    width: '40%',
    float: 'right',
    padding: '10px',
    background: '#879C87',
  },
  tweet: {
    border: '1px dash #ddd',
    boxShadowing: '',
    padding: '5px',
    margin: '10px',
    color: '#879C87',
    backgroundColor: 'white',
    position: 'relative',
  },
  paper: {
    border: '1px dash #ddd',
    boxShadowing: '',
    padding: '5px',
    margin: '10px',
    color: '#879C87',
    backgroundColor: 'black',
    position: 'relative',
  },
  favorite: {
    // fill: 'black'
  },
  retweet: {
    // fill: 'black'
  },
  icon: {
    display: 'inline-block',
    boxShadow: '0px',
    backgroundColor: '',
    fill: '#879C87',
  },
  div: {
    position: 'relative',
    width: '100%',
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
    alignItems: 'center'
  }
};

const PostedTweet = ({ tweet }) => {
  return (
    <Card style={style.main}>
      <CardHeader
        style={style.div}
        title="Posted to Twitter"
        subtitle={tweet.created_at}
        avatar="http://lorempixel.com/100/100/nature/"
      >
      <FloatingActionButton
        mini={true}
        linkButton={true}
        href={tweet.tweet_text}
        style={style.icon}
        backgroundColor="black"
        >
        <Launch/>
      </FloatingActionButton>

      </CardHeader>
      <CardText style={style.paper}>
      {tweet.tweet_text}
      </CardText>
        <div style={style.div}>
          <div style={style.align}><Repeat style={style.retweet}/> {tweet.retweet_count} </div>
          <div style={style.align}><Favorite style={style.favorite}/> {tweet.favorite_count}</div>
        </div>
    </Card>
  );
};

PostedTweet.propTypes = {
  tweet: PropTypes.object,
};

export default PostedTweet;

