function fixForDb(userId, tweet) {
  const source = tweet.findIndex(c => typeof c === 'object');
  if (source === -1) {
    return {
      user_twitter_id: userId,
      bot_tweet_body: tweet.join(' '),
      updated_at: new Date(),
      created_at: new Date()
    };
  } else if (tweet[source].id_str) {
    const url = `https://www.twitter.com/${tweet[source].user.screen_name}/status/${tweet[source].id_str}`;
    return {
      tweet_id_str: tweet[source].id_str,
      user_twitter_id: userId,
      retweet_count: tweet[source].retweet_count,
      favorite_count: tweet[source].favorite_count,
      user_screen_name: tweet[source].user.screen_name,
      user_followers_count: tweet[source].user.followers_count,
      tweet_text: tweet[source].text,
      bot_tweet_body: tweet.reduce((str, c, i) => `${str} ${i === source ? url : c}`, ''),
      updated_at: new Date(),
      created_at: new Date()
    };
  }
  return {
    user_twitter_id: userId,
    news_headline: tweet[source].headline,
    bot_tweet_body: tweet.reduce((str, c, i) => `${str} ${i === source ? tweet[source]['news_url'] : c}`, ''),
    updated_at: new Date(),
    created_at: new Date()
  };
}

module.exports = fixForDb;
