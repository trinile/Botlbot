function relativeRank(tweet) {
  return (
    ((tweet.retweet_count * 10) + tweet.favorite_count) /
    (Math.log(tweet.user.followers_count) || Math.log(1)) // prevent division by 0;
  );
}

function compareRank(a, b) {
  return relativeRank(a) - relativeRank(b);
}

function topTwentyTweets(tweets, n) {
  n = n || 20;
  return tweets.sort(compareRank).slice(0, n);
}

module.exports = {
  filterTopN: topTwentyTweets
}
