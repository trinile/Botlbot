const twit = require('../helpers').twit;

function relativeRank(tweet) {
  return (
    ((tweet.retweet_count * 10) + tweet.favorite_count) /
    (tweet.user.followers_count || 1) // prevent division by 0;
  );
}

function compareRank(a, b) {
  return relativeRank(a) - relativeRank(b);
}

function topTwentyTweets(tweets, n) {
  n = n === undefined ? 20 : n;
  return tweets.sort(compareRank).slice(0, n);
}

function fetchFromFeed(token, tokenSecret) {
  return twit.get('/statuses/home_timeline', token, tokenSecret)
  .then(results => results)
  .catch(err => console.log(err));
}

function myTopTwentyFeed(token, tokenSecret, n) {
  return fetchFromFeed(token, tokenSecret)
  .then(topTwentyTweets)
  .catch(err => console.log(err));
}

module.exports = myTopTwentyFeed;
