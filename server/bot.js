var Twit = require('twit');
var wordfilter  = require('wordfilter');
require('dotenv').config();

var T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

var getPublicTweet = function(cb) {
  T.get('search/tweets', {q: 'cat :)', count: 1, result_type: 'recent', lang: 'en'}, function(err, data, response) {
    var botData;
    if (!err) {
      botData = {
        baseTweet       : data.statuses[0].text.toLowerCase().replace(/@[.+]\b/, 'REDACTED'),
        tweetID         : data.statuses[0].id_str,
        tweetUsername   : data.statuses[0].user.screen_name
      };
      console.log('retrieved this from twitter API:', botData);
      cb(null, botData);
    } else {
      console.log("There was an error getting a public Tweet. Abandoning EVERYTHING :(");
      cb(err, botData);
    }
  });
};

var postTweet = function(err, botData) {
  if(err) {
    console.error('ERROR:', err);
  } else if (!wordfilter.blacklisted(botData.baseTweet)) {
    console.log('should post:', botData.baseTweet);
    T.post('statuses/update', {status: botData.baseTweet}, function(err, data, response) {
      console.log('posted:', data);
    });
  }
};

setInterval(function() {
  try {
    getPublicTweet(postTweet);
  }
  catch (e) {
    console.log(e);
  }
}, 65000);
