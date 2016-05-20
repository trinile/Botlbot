import React, { PropTypes } from 'react';
import style from '../styles/tweet.js';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import SchedulePopOver from './Scheduler';
import moment from 'moment';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Trash, Post, Edit, Launch, Schedule} from './TweetButtons';
import { NewsSource, TweetSource } from './tweet_sources';
import Settings from 'material-ui/svg-icons/action/settings';

const Tweet = ({
  tweet,
  postTweet,
  trashTweet,
  requestEdit,
  scheduleTweet,
}) => {
    const time = () => { 
      return tweet.scheduled_time
      ? 'Scheduled for ' + moment().unix(tweet.scheduled_time.calendar()
      : 'Generated ' + moment(tweet.created_at).fromNow() };
    const getUrl = () => {
      return 'http://twitter.com/' + tweet.user_screen_name + '/status/...'
    }
  return (
    <Card style={style.main}>
      <CardHeader
        title="Bot Generated Tweet"
        subtitle={time()}
        avatar={<Settings style={style.avatar}/>}
        style={style.header}
      >
        <Trash tweet={tweet} trashTweet={trashTweet}/>
      </CardHeader>
      <CardText style={style.tweet}>
        {tweet.tweet_id_str 
        ? <p>{getUrl()}</p>
        : <p>{tweet.bot_tweet_body}</p>
        }

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
        {tweet.scheduled_time
        ? <Schedule style={style.scheduled} tweet={tweet} scheduleTweet={scheduleTweet}/>
        : <Schedule tweet={tweet} scheduleTweet={scheduleTweet}/>
        }
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
