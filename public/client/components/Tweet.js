import React, { PropTypes } from 'react';
import styles from '../styles/main.css';

const Tweet = ({
  text,
  retweet_count: retweets,
  favorites_count: favorites,
  user: {
    screen_name: screenName,
    followers_count: followers,
  },
}) => (
  <article className={styles.tweet}>
    <h3>Tweet</h3>
    <section>
      <p>{text}</p>
      <aside>
        {/* <Actions /> Not sure if this would work better as own component*/}
        <button>Post</button>
        <span> </span>
        <button>Edit</button>
        <span> </span>
        <button>Trash</button>
      </aside>
    </section>
    <section>
      <h4>At A Glance</h4>
      <ul>
        <li>Retweets: {retweets}</li>
        <li>Favorited: {favorites}</li>
        <li>Tweeted by: {screenName}</li>
        <li>Followers: {followers}</li>
      </ul>
    </section>
  </article>
);

Tweet.propTypes = {
  text: PropTypes.string,
  retweet_count: PropTypes.number,
  favorites_count: PropTypes.number,
  user: PropTypes.object,
};

export default Tweet;
