const knex = require('../db.js');

function scrubFetchedTweet(tweet, userId)  {
  return {
    tweet_id_str: tweet.id_str,
    user_twitter_id: userId,
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

function saveGeneratedTweets(tweets) {
  return knex('generatedtweets')
    .insert(tweets);
}

function getGeneratedTweets(userID, page) {
  console.log(page);
  return knex('generatedtweets')
    .where({ user_twitter_id: userID, tweet_status: 'available' })
    .select()
    .orderBy('updated_at', 'desc')
    .offset(page * 5)
    .limit(5);
}
//generated tweets (schedule_id) and scheduledtweets (schedule_id, schedule_time)
function getScheduledTweets(userID) {
  return knex('generatedtweets')
  .where({ user_twitter_id: userID, tweet_status: 'scheduled' })
  .innerJoin('scheduledtweets', 'generatedtweets.schedule_id', 'scheduledtweets.schedule_id')
  .select(/*'generatedtweets.*', 'scheduletweets.scheduled_time'*/);
}

function getPostedTweets(userID) {
  return knex('postedtweets')
    .where({ user_twitter_id: userID })
    .select();
}

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
      updated_at: new Date(),
    }, 'tweet_status');
}

function modifyTweetText(bot_tweet_id, tweet_text) {
  return knex('generatedtweets')
    .where({ bot_tweet_id: bot_tweet_id })
    .update({
      tweet_text: tweet_text,
      updated_at: new Date(),
    }, 'bot_tweet_id');
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
        updated_at: new Date(),
      }, 'tweet_status')
  })
  .catch(err => console.log(err));
}

function joinTweetAndUserByTweetId(id) {
  return knex('generatedtweets')
    .join('users', 'users.user_twitter_id', '=', 'generatedtweets.user_twitter_id')
    .where({ bot_tweet_id: id })
    .select('users.token', 'users.tokenSecret', 'generatedtweets.bot_tweet_body')
    .then(response => response[0])
    .catch(console.log);
}

var moment = require('moment');
// const currentDate = moment();
// var last = '2016-05-17 17:03:08-07';
// console.log(moment(last).isValid());

// console.log(moment(last).add(24, 'hours').isBefore(currentDate));
// const currentDate = new Date();
// const hours = currentDate.getHours();
// const hours = currentDate.getMinutes();

function deleteGeneratedTweets() {
  var currentDate = moment();
  knex.select('created_at', 'bot_tweet_id')
  .from('generatedtweets')
  .then(function(dates) {
    console.log('dates ------->', dates);
    dates.forEach(function(date) {
      if (moment(date.created_at).add(24, 'hours').isBefore(currentDate)) {
        //delete tweets from database that are more than 24 hours old
        knex.table('generatedtweets')
        .where({'bot_tweet_id': date.bot_tweet_id })
        .del();
      }
    return dates;
    })
  })
};

function postScheduledTweets() {
  //do a lookup of each scheduled tweet
  
}

module.exports = {
  joinTweetAndUserByTweetId,
  getGeneratedTweets,
  saveGeneratedTweets,
  getScheduledTweets,
  deleteGeneratedTweet,
  getPostedTweets,
  savePostedTweet,
  modifyTweetStatus,
  modifyTweetText,
  scheduleTweet,
};
