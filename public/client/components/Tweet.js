import React, { PropTypes } from 'react';
import styles from '../styles/main.css';

const Tweet = ({
  tweet,
  postTweet,
  trashTweet,
}) => (
  <article className={styles.tweet}>
    <h3>Tweet</h3>
    <section>
      <p>{tweet.text}</p>
      <aside>
        {/* <Actions /> Not sure if this would work better as own component*/}
        <span>{tweet.trashed ? 'trash' : tweet.posted ? 'posted' : 'nothing'}</span>
        <button onClick={postTweet}>Post</button>
        <span> </span>
        <button>Edit</button>
        <span> </span>
        <button onClick={trashTweet}>Trash</button>
      </aside>
    </section>
    <section>
      <h4>At A Glance</h4>
      <ul>
        <li>Retweets: {tweet.retweets}</li>
        <li>Favorited: {tweet.favorites}</li>
        <li>Tweeted by: {tweet.screenName}</li>
        <li>Followers: {tweet.followers}</li>
      </ul>
    </section>
  </article>
);

Tweet.propTypes = {
  tweet: PropTypes.object,
  postTweet: PropTypes.func,
  trashTweet: PropTypes.func,
};

export default Tweet;
