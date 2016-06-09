import React, { PropTypes } from 'react';
import style from './styles/Tweets_styles.js';
import Paper from 'material-ui/Paper';
import { Card, CardHeader } from 'material-ui/Card';
import Repeat from 'material-ui/svg-icons/av/repeat';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Launch from 'material-ui/svg-icons/action/launch';
import Settings from 'material-ui/svg-icons/action/settings';
import moment from 'moment';

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
        avatar={<Settings style={style.avatar}/>}
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
          <div style={style.align}><Repeat style={style.icon}/> {tweet.retweet_count} </div>
          <div style={style.align}><Favorite style={style.icon}/> {tweet.favorite_count}</div>
        </div>
      </Paper>
    </Card>
  );
};

PostedTweet.propTypes = {
  tweet: PropTypes.object,
};

export default PostedTweet;

