import React, { PropTypes } from 'react';
// import styles from '../styles/tweet.css';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import SchedulePopOver from './Scheduler';
import moment from 'moment';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Trash, Post, Edit, Launch, Schedule} from './TweetButtons';
import { NewsSource, TweetSource } from './tweet_sources';

const style = {
  main: {
    margin: '16px 32px 16px 0',
    width: '40%',
    float: 'right',
    padding: '5px',
    background: 'white',
  },
  tweet: {
    backgroundColor: 'white',
    position: 'relative',
  },
  buttons: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#879C87',
    padding: '',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '',
    width: '100%',
  },
};

const Tweet = ({
  tweet,
  postTweet,
  trashTweet,
  requestEdit,
  scheduleTweet,
}) => {
    const time = () => { return 'Generated ' + moment(tweet.created_at).fromNow()};
  return (
    <Card style={style.main}>
      <CardHeader
        title="Bot Generated Tweet"
        subtitle={time()}
        avatar="http://lorempixel.com/100/100/nature/"
        style={style.header}
      >
        <Trash tweet={tweet} trashTweet={trashTweet}/>
      </CardHeader>
      <CardText style={style.tweet}>
        {tweet.bot_tweet_body}

        {tweet.news_headline
        ? <NewsSource tweet={tweet} />
        : null
        }
      
        {tweet.tweet_id_str
          ? <TweetSource tweet={tweet}/>
          : null
        }
      </CardText>
      <CardActions style={style.buttons}>
        <Post tweet={tweet} postTweet={postTweet}/>
        <Schedule tweet={tweet} scheduleTweet={scheduleTweet}/>
        <Edit tweet={tweet} requestEdit={requestEdit} />
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

export default Tweet;
