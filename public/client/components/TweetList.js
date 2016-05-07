import React, { PropTypes } from 'react';
import Tweet from './Tweet';
import styles from '../styles/main.css';


const TweetList = ({ tweets, onGetTweets, onPostTweet, onTrashTweet }) => {
  function fetchTweets() {
    fetch('http://127.0.0.1:1337/generateDummy', { method: 'GET', mode: 'cors' })
    .then(result => result.json())
    .then(result => onGetTweets(result))
    .catch(err => console.error(err));
  }
  return (
    <div>
      <button onClick={fetchTweets}>Get Tweeties</button>
      <div styles={styles['tweets-list']}>
        {tweets.map((t) => (
          <Tweet
            key={t.id_str}
            tweet={t}
            postTweet={() => onPostTweet(t.id_str)}
            trashTweet={() => onTrashTweet(t.id_str)}
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
};

export default TweetList;
