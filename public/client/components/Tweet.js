import React, { PropTypes } from 'react';
import styles from '../styles/tweet.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import SchedulePopOver from './Scheduler';

const style = {
  main: {
    margin: '16px 32px 16px 0',
    width: '50%',
    float: 'right'
  },
  paper: {
    border: '1px #ddd',
    'border-radius': '4px',
    padding: '10px',
    color: 'green',
  }
};

const Tweet = ({
  tweet,
  postTweet,
  trashTweet,
  requestEdit,
  scheduleTweet,
}) => {
  const scheduleRequest = function() {

  }
  return (
    <Card style={style.main}>
      <CardHeader
        title="Bot Generated Tweet" 
        subtitle={tweet.updated_at}
        avatar="http://lorempixel.com/100/100/nature/"
      />
      <CardTitle title="Tweet Text: " subtitle="Below is content generated for tweet" />
      <CardText style={style.paper}>
      {tweet.tweet_text}
      </CardText>
      <Paper href="/linktooriginaltwittercontent" style={style.paper}>
        <ul>
          <li>Retweets: {tweet.retweet_count}</li>
          <li>Favorited: {tweet.favorite_count}</li>
          <li>Tweeted by: {tweet.user_screen_name}</li>
          <li>Followers: {tweet.followers_count}</li>
        </ul>
      </Paper>
      <CardActions>
        <FlatButton label="POST" onTouchTap={postTweet} />
        <FlatButton label="TRASH" onClick={trashTweet} />
        <FlatButton label="EDIT" onClick={requestEdit} />
        <SchedulePopOver tweet={tweet} onSchedule={scheduleTweet} />
      </CardActions>
    </Card>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.object,
  postTweet: PropTypes.func,
  trashTweet: PropTypes.func,
  scheduleTweet: PropTypes.func,
};

export default Tweet;
