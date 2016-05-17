var Twit = require('twit');
var Tweets = require('./db/controllers/tweetsController.js');
require('dotenv').config();



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



    // IN THE FUTURE: this should write tweets to db instead of just sending them to client
      // something like:
      // client.lpush('tweetlist:' + clientResponse.user.id, ...cleanTweets.slice(0, 20));

    // clientResponse.json(cleanTweets.slice(0, 20));

    Tweets.saveGeneratedTweets(userID, cleanTweets)
    .then(function(reply) {
      console.log('clean tweetds adddded', reply);
      clientResponse.send('TWEETS ADDED --------');
    })
    .catch(function(err) {
      console.log(err);
    })
  });
}

module.exports = pullTweetsFromFeed;
