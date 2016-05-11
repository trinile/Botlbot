var db = require('../db.js');

function scrubFetchedTweet(tweet, userID) {
  return {
    tweet_id_str: tweet.id_str,
    user_id: userID,
    retweet_count: tweet.retweet_count,
    favorite_count: tweet.favorite_count,
    user_screen_name: tweet.user.screen_name,
    user_followers_count: tweet.user.followers_count,
    tweet_text: tweet.text
  };
}

function scrubPostedTweet(tweet) {
  return {
    user_twitter_id: tweet.user.id_str,
    tweet_text: tweet.tweet_text,
    original_tweet_id: tweet.quoted_status_id_str,
    // right now not being used, but could store info from the original
    // tweet like retweet_count and followers_count to track performance
    // of our algorithm
    original_tweet_props: '',
    retweet_id: tweet.id_str,
    retweet_count: 0,
    favorite_count: 0,
    created_at: new Date(tweet.created_at),
    updated_at: new Date()
  };
}

function saveGeneratedTweets(userID, tweets) {
  return db.knex('generatedtweets')
    .insert(tweets.map(t => scrubFetchedTweet(t, userID)));
}

function getGeneratedTweets(userID) {
  return db.knex('generatedtweets')
    .where({ user_twitter_id: userID })
    .select();
}

function savePostedTweet(tweet) {
  return db.knex('postedtweets')
    .insert(scrubPostedTweet(tweet));
}

function deleteGeneratedTweet(tweet) {
  return db.knex('generatedtweets')
    .where({ tweet_id_str: tweet.id_str })
    .del();
}

module.exports = {
  getGeneratedTweets: getGeneratedTweets,
  saveGeneratedTweets: saveGeneratedTweets,
  deleteGeneratedTweet: deleteGeneratedTweet,
  savePostedTweet: savePostedTweet
};
