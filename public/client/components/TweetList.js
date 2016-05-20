import React, { PropTypes } from 'react';
import Tweet from './Tweet';
import styles from '../styles/main.css';
import EditTweet from './EditTweet';
import PostedTweet from './PostedTweet';

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
  onScheduleTweet }) => {

  return (
    <div>
      <div style={style}>
        {tweets.map((t, index) => {
          if (t.editing === true) {
            return <EditTweet 
              key={index}
              tweet={t} 
              postTweet={() => onPostTweet(t.bot_tweet_id)} 
              cancelEdit={() => cancelEditTweet(t.bot_tweet_id)}
              editTweet={() => onEditTweet(t.bot_tweet_id, t.bot_tweet_body)}
              />
          } else if (t.tweet_status === 'available') {
            return <Tweet
              key={index}
              tweet={t}
              postTweet={() => onPostTweet(t.bot_tweet_id)}
              trashTweet={() => onTrashTweet(t.bot_tweet_id)}
              requestEdit={() => onRequestEdit(t.bot_tweet_id)}
              scheduleTweet={() => onScheduleTweet(t.bot_tweet_id, t.schedule)}
              />
          } else if (t.tweet_status === 'posted_in_db') {
            return (<PostedTweet
              key={index}
              tweet={t}
            />)
          } else if (t.tweet_status === "scheduled_in_db") {
            return ( <Tweet
              key={index}
              tweet={t}
              postTweet={() => onPostTweet(t.bot_tweet_id)}
              trashTweet={() => onTrashTweet(t.bot_tweet_id)}
              requestEdit={() => onRequestEdit(t.bot_tweet_id)}
              scheduleTweet={() => onScheduleTweet(t.bot_tweet_id, t.schedule)}
              /> )
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
};


export default TweetList;
