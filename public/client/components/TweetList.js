import React, { PropTypes } from 'react';
import Tweet from './Tweet';
import styles from '../styles/main.css';
import EditTweet from './EditTweet';

const style = {
  position: 'fixed',
  width: '100%',
  'textAlign':'center',
};

const TweetList = ({ 
  tweets, 
  onRequestEdit,
  cancelEditTweet,
  onPostTweet, 
  onTrashTweet, 
  onEditTweet,
  onScheduleTweet }) => {

  return (
    <div>
      <div style={styles['tweets-list']}>
        {tweets.map((t, index) => (
          t.editing === true 
          ? <EditTweet 
          key={index}
          tweet={t} 
          postTweet={() => onPostTweet(t.bot_tweet_id)} 
          cancelEdit={() => cancelEditTweet(t.bot_tweet_id)}
          editTweet={() => onEditTweet(t.bot_tweet_id, t.tweet_text)}
          />
          : <Tweet
            key={index}
            tweet={t}
            postTweet={() => onPostTweet(t.bot_tweet_id)}
            trashTweet={() => onTrashTweet(t.bot_tweet_id)}
            requestEdit={() => onRequestEdit(t.bot_tweet_id)}
            scheduleTweet={() => onScheduleTweet(t.bot_tweet_id, t.schedule)}
            />
          ))}
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
};


export default TweetList;
