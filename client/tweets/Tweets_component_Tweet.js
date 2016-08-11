import React, { PropTypes } from 'react';
import style from './styles/Tweets_styles.js';
// import styles from './styles/tweet.css';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Settings from 'material-ui/svg-icons/action/settings';
import { Trash, Post, Edit, Schedule } from './Tweets_component_TweetButtons';
import NewsSource from './Tweets_component_NewsSource';
import TweetSource from './Tweets_component_TwitterSource';
import moment from 'moment';
import Pure from 'purecss/build/pure-min.css';
import Grid from 'purecss/build/grids-responsive-min.css';
import Offset from '../app/pureCSS/offset.css';
import helper from './Tweets_helper';

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
    <Card style={style.main} className={[
      `${Pure['pure-u-1']} ${Grid['pure-u-md-1-2']} ${Grid['pure-u-lg-1-3']} ${Offset['offset-md-1-12']}`
    ]}>
      <CardHeader
        title="Bot Generated Tweet"
        subtitle={time()}
        // avatar={<Settings style={style.avatar} />}
        avatar={helper.getUserInfo('profile_img')}
        style={style.header}
        titleStyle={style.cardTitle}
        subtitleStyle={style.cardTitle}
        textStyle={style.cardTitle}
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
