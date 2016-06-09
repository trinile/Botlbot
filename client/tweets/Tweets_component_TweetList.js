import React, { PropTypes } from 'react';
import Tweet from './Tweets_component_Tweet';
// import styles from '../styles/main.css';
import EditTweet from './Tweets_component_EditTweet.js';
import PostedTweet from './Tweets_component_PostedTweet';

const style = {
  display: 'flex',
  justifyContent: 'space-around',
  flexFlow: 'column wrap',
};

const TweetList = ({
  tweets,
  onRequestEdit,
  cancelEditTweet,
  onPostTweet,
  onTrashTweet,
  onEditTweet,
  onScheduleTweet,
  redirectToScheduled,
  redirectToPosted,
  setSnackMessage,
}) => {

  return (
    <div>
      <div style={style}>
        {tweets.map((t, index) => {
          if (t.editing === true) {
            return 
              <EditTweet
                key={index}
                tweet={t} 
                postTweet={() => onPostTweet(t.bot_tweet_id)}
                cancelEdit={() => cancelEditTweet(t.bot_tweet_id)}
                editTweet={() => onEditTweet(t.bot_tweet_id, t.bot_tweet_body)}
                setSnackMessage={setSnackMessage}
              /> ;
          } else if (t.tweet_status === 'available') {
            return (
              <Tweet
                key={index}
                tweet={t}
                postTweet={() => onPostTweet(t.bot_tweet_id)}
                redirectToPosted={redirectToPosted}
                redirectToScheduled={redirectToScheduled}
                trashTweet={() => onTrashTweet(t.bot_tweet_id)}
                requestEdit={() => onRequestEdit(t.bot_tweet_id)}
                scheduleTweet={() => onScheduleTweet(t.bot_tweet_id, t.schedule)}
                setSnackMessage={setSnackMessage}
              /> );
          } else if (t.tweet_status === 'posted_in_db') {
            return (
              <PostedTweet
                key={index}
                tweet={t}
              />);
          } else if (t.tweet_status === 'scheduled_in_db') {
            return ( 
              <Tweet
                key={index}
                tweet={t}s
                redirectToPosted={redirectToPosted}
                redirectToScheduled={redirectToScheduled}
                postTweet={() => onPostTweet(t.bot_tweet_id)}
                trashTweet={() => onTrashTweet(t.bot_tweet_id)}
                requestEdit={() => onRequestEdit(t.bot_tweet_id)}
                scheduleTweet={() => onScheduleTweet(t.bot_tweet_id, t.schedule)}
                setSnackMessage={setSnackMessage}
              /> );
          }
        })}
      </div>
    </div>
  );
};

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(React.PropTypes.object),
  onGetTweets: PropTypes.func,
  onPostTweet: PropTypes.func,
  onTrashTweet: PropTypes.func,
  onEditTweet: PropTypes.func,
  onRequestEdit: PropTypes.func,
  cancelEditTweet: PropTypes.func,
  onScheduleTweet: PropTypes.func,
  redirectToScheduled: PropTypes.func,
  redirectToPosted: PropTypes.func,
  setSnackMessage: PropTypes.func,
};


export default TweetList;
