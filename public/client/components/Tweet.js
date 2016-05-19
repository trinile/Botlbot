import React, { PropTypes } from 'react';
import styles from '../styles/tweet.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import SchedulePopOver from './Scheduler';
import moment from 'moment';
import Repeat from 'material-ui/svg-icons/av/repeat';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Launch from 'material-ui/svg-icons/action/launch';
import Delete from 'material-ui/svg-icons/action/delete';
import Schedule from 'material-ui/svg-icons/action/schedule';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import Publish from 'material-ui/svg-icons/editor/publish';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const style = {
  main: {
    margin: '16px 32px 16px 0',
    width: '40%',
    float: 'right',
    padding: '5px',
    background: '#879C87',
  },
  tweet: {
    border: '1px dash #ddd',
    borderRadius: '4px',
    boxShadowing: '',
    padding: '5px',
    margin: '10px',
    color: '#879C87',
    backgroundColor: 'white',
    position: 'relative',
  },
  paper: {
    border: '1px dash #ddd',
    borderRadius: '4px',
    boxShadowing: '',
    padding: '5px',
    margin: '10px',
    color: '#879C87',
    backgroundColor: 'black',
    position: 'relative',
    // display: 'flex',
    // justifyContent: 'space-around',
  },
  schedule: {
    float: 'right',
  },
  favorite: {
    fill: '#879C87'
  },
  retweet: {
    fill: '#879C87'
  },
  icon: {
    display: 'inline-block',
    'boxShadow': '0px',
    backgroundColor: '',
    fill: 'black',
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
  }
};

const Tweet = ({
  tweet,
  postTweet,
  trashTweet,
  requestEdit,
  scheduleTweet,
}) => {
    const time = () => {
      return 'Generated ' + moment(tweet.created_at).fromNow();
    }
  return (
    <Card style={style.main}>
      <CardHeader
        title="Bot Generated Tweet"
        subtitle={time()}
        avatar="http://lorempixel.com/100/100/nature/"
        style={style.div}
      >
      <FloatingActionButton 
        mini={true}
        style={style.icon}
        onTouchTap={trashTweet}
        backgroundColor="#879C87"
        >
      <Delete/>
      </FloatingActionButton>

      </CardHeader>
      <CardText style={style.tweet}>
        {tweet.bot_tweet_body}
      </CardText>
      {tweet.news_headline
      ? <Paper 
      style={style.paper}
      zDepth={1} >

      <h4 style={style.text}>{tweet.news_headline}</h4>
      <FloatingActionButton 
        mini={true}
        linkButton={true} 
        href={tweet.bot_tweet_body} 
        style={style.icon}
        backgroundColor="black"
        >
      <Launch/>
      </FloatingActionButton>
      </Paper>
      : null
      }
      {tweet.tweet_id_str
        ? <Paper
        style={style.paper}
        zDepth={1} 
        > 
        <div style={style.div}>
          <span style={style.text}>{tweet.tweet_text} </span>
          <FloatingActionButton 
            mini={true}
            linkButton={true} 
            href={tweet.bot_tweet_body} 
            style={style.icon}
            backgroundColor="black"
            >
            <Launch/>
          </FloatingActionButton>
        </div>
          <div style={style.div}>
          <div><Repeat style={style.retweet}/> {tweet.retweet_count} </div>
          <div><Favorite style={style.favorite}/> {tweet.favorite_count}</div>
          </div>
          <div style={style.div}>
            <div>{tweet.user_screen_name}</div>
            <div>Followers: {tweet.user_followers_count}</div>
          </div>
        </Paper>
        : null
      }
      <CardActions style={style.div}>
      <FloatingActionButton 
        mini={true}
        linkButton={true} 
        onTouchTap={postTweet}
        style={style.launch}
        backgroundColor="#879C87"
      >
      <Publish/>
      </FloatingActionButton>
      <SchedulePopOver style={style.icon} tweet={tweet} onSchedule={scheduleTweet}>
      </SchedulePopOver>
      <FloatingActionButton 
        mini={true}
        onTouchTap={requestEdit}
        backgroundColor="#879C87"
        style={style.launch}
      >
      <Edit/>
      </FloatingActionButton>
      </CardActions>
    </Card>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.object,
  postTweet: PropTypes.func,
  trashTweet: PropTypes.func,
  scheduleTweet: PropTypes.func,
  requestEdit: PropTypes.func,
};
// ///*href="https://www.twitter.com/`${tweet.user_screen_name}`/status/`${tweet.tweet_id_str}`"*/
export default Tweet;
