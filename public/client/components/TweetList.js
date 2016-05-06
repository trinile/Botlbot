import React, { PropTypes } from 'react';
import Tweet from './Tweet';
import styles from '../styles/main.css';


const TweetList = ({ tweets }) => (
  <div styles={styles['tweets-list']}>
    {tweets.map((t) => (
      <Tweet
        key={t.id_str}
        {...t}
      />
    ))}
  </div>
);

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(React.PropTypes.element),
};

export default TweetList;
