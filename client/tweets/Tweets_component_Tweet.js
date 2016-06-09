import React, { PropTypes } from 'react';
import style from './styles/Tweets_styles.js';
// import styles from './styles/tweet.css';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Settings from 'material-ui/svg-icons/action/settings';
import { Trash, Post, Edit, Schedule } from './Tweets_component_TweetButtons';
import NewsSource from './Tweets_component_NewsSource';
import TweetSource from './Tweets_component_TwitterSource';
import moment from 'moment';

const Tweet = ({
  tweet,
  postTweet,
  trashTweet,
  requestEdit,
  scheduleTweet,
  redirectToPosted,
  redirectToScheduled,
  setSnackMessage,

}) => {
  const time = () => {
    return tweet.scheduled_time
    ? `Scheduled for ${moment.unix(tweet.scheduled_time).calendar()}`
    : `Generated ${moment(tweet.created_at).fromNow()}`
  };
  const getUrl = () => {
    return `http://twitter.com/${tweet.user_screen_name}/status/...`
  };
  return (
    <Card style={style.main}>
      <CardHeader
        title="Bot Generated Tweet"
        subtitle={time()}
        avatar={<Settings style={style.avatar} />}
        style={style.header}
      >
        <Trash 
          tweet={tweet} 
          trashTweet={trashTweet} 
          setSnackMessage={setSnackMessage}
        />
      </CardHeader>
      <CardText style={style.tweetBody}>

        {tweet.tweet_id_str && (<p>{tweet.bot_tweet_body.replace(/https?:\/\/[\S]+\b/, getUrl())}</p>) }
        {!tweet.tweet_id_str && tweet.news_headline && (<p>{tweet.bot_tweet_body.replace(/https?:\/\/[\S]+\b/, 'nytimes.com/...')}</p>) }
        {!tweet.tweet_id_str && !tweet.news_headline && (<p>{tweet.bot_tweet_body}</p>) }

        {tweet.news_headline
        ? <NewsSource tweet={tweet} />
        : null
        }

        {tweet.tweet_id_str
          ? <TweetSource tweet={tweet} />
          : null
        }
      </CardText>
      <CardActions style={style.buttons}>
        <Post
          tweet={tweet}
          postTweet={postTweet}
          redirectToPosted={redirectToPosted}
          setSnackMessage={setSnackMessage}
        />
        <Schedule
          tweet={tweet}
          scheduleTweet={scheduleTweet}
          redirectToScheduled={redirectToScheduled}
          setSnackMessage={setSnackMessage}
        />
        <Edit
          tweet={tweet}
          requestEdit={requestEdit}
          setSnackMessage={setSnackMessage}
        />
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
  setSnackMessage: PropTypes.func,
  redirectToScheduled: PropTypes.func,
  redirectToPosted: PropTypes.func,
};

export default Tweet;
