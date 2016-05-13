const knex = require('../db.js');

function scrubFetchedTweet(tweet)  {
  return {
    tweet_id_str: tweet.id_str,
    user_id: tweet.user.id_str,
    retweet_count: tweet.retweet_count,
    favorite_count: tweet.favorite_count,
    user_screen_name: tweet.user.screen_name,
    user_followers_count: tweet.user.followers_count,
    tweet_text: tweet.text
  };
}
//cleans up data from post API call to Twitter
function scrubPostedTweet(tweet) {
  return {
    user_twitter_id: tweet.user.id_str,
    tweet_text: tweet.text,
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
  return knex('generatedtweets')
    .insert(tweets.map(t => scrubFetchedTweet(t, userID)));
}

function getTweets(userID, table) {
  return knex(table)
    .where({ 
      user_twitter_id: userID, 
      tweet_status: 'available',
    })
    .select();
}
// function getGeneratedTweets(userID) {
//   return knex('generatedtweets')
//     .where({ user_twitter_id: userID })
//     .select();
// }
function savePostedTweet(data) {
  return knex('postedtweets')
    .insert(scrubPostedTweet(data), 'retweet_id'); //previous return: 'retweet_id'
}

function deleteGeneratedTweet(tweet) {
  return knex('generatedtweets')
    .where({ tweet_id_str: tweet.id_str })
    .del();
}

function modifyTweetStatus(bot_tweet_id, status) {
  return knex('generatedtweets')
    .where({ bot_tweet_id: bot_tweet_id })
    .update({
      tweet_status: status,
    }, 'tweet_status')
}

function modifyTweetText(bot_tweet_id, tweet_text) {
  return knex('generatedtweets')
    .where({ bot_tweet_id: bot_tweet_id })
    .update({
      tweet_text: tweet_text,
    }, 'bot_tweet_id')
}

//schedule tweet controller
//insert new entry into scheduledtweets table
//update schedule_id in generated tweets and change status to 'scheduled'
function scheduleTweet(bot_tweet_id, scheduleTime) {
  console.log('time of schedule ------> ', scheduleTime);
  return knex('scheduledtweets')
  .insert({ scheduled_time: scheduleTime }, 'schedule_id')
  .then(function (id) {
    console.log(id);
    console.log(typeof id);
    return knex('generatedtweets')
      .where({ bot_tweet_id: bot_tweet_id })
      .update({
        schedule_id: id[0],
        tweet_status: 'scheduled',
      }, 'tweet_status')
  })
  .catch(err => console.log(err));
}

function joinTweetAndUserByTweetId(id) {
  return knex('generatedtweets')
    .join('users', 'users.user_twitter_id', '=', 'generatedtweets.user_twitter_id')
    .where({ bot_tweet_id: id })
    .select('users.token', 'users.tokenSecret', 'generatedtweets.tweet_text')
    .then(response => response[0])
    .catch(console.log);
}

module.exports = {
  joinTweetAndUserByTweetId: joinTweetAndUserByTweetId,
  getTweets: getTweets,
  saveGeneratedTweets: saveGeneratedTweets,
  deleteGeneratedTweet: deleteGeneratedTweet,
  savePostedTweet: savePostedTweet,
  modifyTweetStatus: modifyTweetStatus,
  modifyTweetText: modifyTweetText,
  scheduleTweet: scheduleTweet,
};
