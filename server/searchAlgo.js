var Twit = require('twit');
var Tweets = require('./db/controllers/tweetsController.js');
require('dotenv').config();

function tweetCleaner(tweet) {
  return {
    retweet_count: (tweet.retweet_count || 1),
    favorite_count: (tweet.favorite_count || 1),
    user: {
      screen_name: tweet.user.screen_name,
      followers_count: (tweet.user.followers_count || 1),
    },
    text: tweet.text,
    id_str: tweet.id_str,
  };
}

function pullTweetsFromFeed(accessToken, secret, userID, clientResponse) {
  const T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: accessToken,
    access_token_secret: secret,
  });

  T.get('/statuses/home_timeline', { count: 200 }, function(err, tweets, res) {
    const cleanTweets = tweets.reduce(function(acc, tweet) {
      acc.push(tweetCleaner(tweet));
      return acc;
    }, []);

    cleanTweets.sort(function(a, b) {
      return (
        ((a.retweet_count * 10 + a.favorite_count) / a.user.followers_count) -
        ((b.retweet_count * 10 + b.favorite_count) / b.user.followers_count)
      );
    });

    // IN THE FUTURE: this should write tweets to db instead of just sending them to client
      // something like:
      // client.lpush('tweetlist:' + clientResponse.user.id, ...cleanTweets.slice(0, 20));

    // clientResponse.json(cleanTweets.slice(0, 20));

    var jsonTweets = cleanTweets.map(function(tweet) {
      return JSON.stringify(tweet);
    });

    console.log('CLEAN TWEETS IS ARRAY?', Array.isArray(cleanTweets));

    console.log('EACH TWEET IS STRING OR OBJECT?', typeof jsonTweets[3]);

    Tweets.addTweets(userID, jsonTweets)
      .then(function(reply) {
        clientResponse.send('tweets added!');
      })
      .catch(function(err) {
        console.error(err);
      });


  });
}

module.exports = pullTweetsFromFeed;
