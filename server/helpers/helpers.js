const Twit = require('twit');
const User = require('./db/controllers/userController');
const Promise = require('bluebird');

function createTwit(token, secret) {
  return new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: token,
    access_token_secret: secret,
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
  });
}

function postAsync(twit, status) {
  return new Promise(function(resolve, reject) {
    twit.post(
      'statuses/update',
      { status: status },
      function(err, data, response) {
        if (err) reject(err);
        // resolve({ data: data, response: response });
        resolve(data);
      }
    );
  });
}

function postTweet(data) {
  return Promise.resolve(createTwit(data.token, data.tokenSecret))
  .then(twit => postAsync(twit, data.tweet_text))
  .catch(err => console.log(err));
}

exports.postTweet = postTweet;
