import React, { PropTypes } from 'react';
import Tweet from './Tweet';
import styles from '../styles/main.css';


const TweetsList = ({ tweets }) => (
  <main styles={styles['tweets-list']}>
    {tweets.map((t) => (
      <Tweet
        key={t.id_str}
        {...t}
      />
    ))}
  </main>
);

TweetsList.propTypes = {
  tweets: React.PropTypes.arrayOf(React.PropTypes.element),
};

export default TweetsList;
