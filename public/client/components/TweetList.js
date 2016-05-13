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
  onEditTweet }) => {

  return (
    <div>
      <div style={styles['tweets-list']}>
        {tweets.map((t, index) => (
          t.editing === true 
          ? <EditTweet 
          key={index}
          tweet={t} 
          postTweet={() => onPostTweet(t.tweet_id_str)} 
          cancelEdit={() => cancelEditTweet(t.tweet_id_str)}
          editTweet={() => onEditTweet(t.tweet_id_str, t.tweet_text)}
          />
          : <Tweet
            key={index}
            tweet={t}
            postTweet={() => onPostTweet(t.tweet_id_str)}
            trashTweet={() => onTrashTweet(t.tweet_id_str)}
            requestEdit={() => onRequestEdit(t.tweet_id_str)}
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
};


export default TweetList;
