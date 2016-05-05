import React, { PropTypes } from 'react';
import Tweet from './Tweet';
import styles from '../styles/main.css';


const TweetsList = ({ tweets }) => (
  <div styles={styles['tweets-list']}>
    {tweets.map((t) => (
      <Tweet
        key={t.id_str}
        {...t}
      />
    ))}
  </div>
);

TweetsList.propTypes = {
  tweets: React.PropTypes.arrayOf(React.PropTypes.element),
};

export default TweetsList;
