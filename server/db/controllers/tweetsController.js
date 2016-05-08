var db = require('../db.js');

module.exports = {

  addTweets: function(userID, Tweets) {

  var tweetsArr = Tweets.map(function(Tweet) {
    return {
      tweet_id_str: Tweet.id_str,
      user_id: userID,
      retweet_count: Tweet.retweet_count,
      favorite_count: Tweet.favorite_count,
      user_screen_name: Tweet.user.screen_name,
      user_followers_count: Tweet.user.followers_count,
      tweet_text: Tweet.text
    };
  });
    return db.knex('generatedtweets')
      .insert(tweetsArr);
      //returns a promise
  },

  retrieveTweets: function(userID) {
    return db.knex('generatedtweets')
      .where({ user_id: userID })
      .select();
      // returns array of entries
  },

  addPostedTweet: function(tweet) {
    var posted = {
      user_id: tweet.user_id,
      retweet_count: 0,
      favorite_count: 0,
      original_tweet_id: tweet.tweet_id_str,
      tweet_text: tweet.tweet_text
    };
    return db.knex('postedtweets')
      .insert(posted);
  },

  deleteTweet: function(tweet) {
    return db.knex('generatedtweets')
      .where({ tweet_id_str: tweet.id_str })
      .del();
  }
};
