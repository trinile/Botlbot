import React, { PropTypes } from 'react';
import style from './styles/Tweets_styles';
import { Launch } from './Tweets_component_TweetButtons';
import Paper from 'material-ui/Paper';

// this component shows information for a tweet generated from a news article
// includes news headline

const NewsSource = ({ tweet }) => {
  return (
    <Paper
      style={style.news}
      zDepth={1}
      >
        <h4 style={style.text}>{tweet.news_headline}</h4>
        <Launch tweet={tweet}/>
    </Paper>
  );
};

NewsSource.PropTypes = {
  tweet: PropTypes.object,
};

export default NewsSource;
