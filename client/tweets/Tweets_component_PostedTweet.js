import React, { PropTypes } from 'react';
import style from './styles/Tweets_styles.js';
import Paper from 'material-ui/Paper';
import { Card, CardHeader } from 'material-ui/Card';
import Repeat from 'material-ui/svg-icons/av/repeat';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Launch from 'material-ui/svg-icons/action/launch';
import Settings from 'material-ui/svg-icons/action/settings';
import Pure from 'purecss/build/pure-min.css';
import Grid from 'purecss/build/grids-responsive-min.css';
import helper from './Tweets_helper.js';
import Offset from '../app/pureCSS/offset.css';

const PostedTweet = ({ tweet }) => {
  return (
    <Card style={style.main} className={[
      `${Pure['pure-u-1']} ${Grid['pure-u-md-1-2']} ${Grid['pure-u-lg-1-3']} ${Offset['offset-md-1-12']}`
    ]}>
      <CardHeader
        title="Posted to Twitter"
        subtitle={helper.getTime(tweet)}
        avatar={helper.getUserInfo('profile_img')}
        style={style.header}
        titleStyle={style.cardTitle}
        subtitleStyle={style.cardTitle}
        textStyle={style.cardTitle}
      >
      <FloatingActionButton
        mini={true}
        linkButton={true}
        href={helper.tweetUrl(tweet)}
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

