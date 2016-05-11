import React, { PropTypes } from 'react';
import styles from '../styles/tweet.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// const style = {
//   width: '60%',
//   display: 'inline-block'
// };

const Tweet = ({
  tweet,
  postTweet,
  trashTweet,
}) => (
  <Card>
    <CardHeader
      title="Tweet"
      subtitle="Subtitle"
      avatar="http://lorempixel.com/100/100/nature/"
    />
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
    {tweet.text}
      <ul>
        <li>Retweets: {tweet.retweets}</li>
        <li>Favorited: {tweet.favorites}</li>
        <li>Tweeted by: {tweet.screenName}</li>
        <li>Followers: {tweet.followers}</li>
      </ul>
    </CardText>
    <CardActions>
      <FlatButton label="POST" onClick={postTweet} />
      <FlatButton label="TRASH" onClick={trashTweet} />
      <FlatButton label="EDIT" />
    </CardActions>
  </Card>
);

// const Tweet = ({
//   tweet,
//   postTweet,
//   trashTweet,
// }) => (
//   <article className={styles.tweet}>
//     <h3>Tweet</h3>
//     <section>
//       <p>{tweet.text}</p>
//       <div>
//         {/* <Actions /> Not sure if this would work better as own component*/}
//         <button onClick={postTweet}>Post</button>
//         <span> </span>
//         <button>Edit</button>
//         <span> </span>
//         <button onClick={trashTweet}>Trash</button>
//       </div>
//     </section>
//     <aside>
//       <h4>At A Glance</h4>
//       <ul>
//         <li>Retweets: {tweet.retweets}</li>
//         <li>Favorited: {tweet.favorites}</li>
//         <li>Tweeted by: {tweet.screenName}</li>
//         <li>Followers: {tweet.followers}</li>
//       </ul>
//     </aside>
//   </article>
// );

Tweet.propTypes = {
  tweet: PropTypes.object,
  postTweet: PropTypes.func,
  trashTweet: PropTypes.func,
};

export default Tweet;
