const Twit = require('twit');
const User = require('./db/controllers/userController');
const Promise = require('bluebird');

function createTwit(token, secret) {
  return Promise.resolve(new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: token,
    access_token_secret: secret,
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
  }));
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

function post(token, tokenSecret, status) {
  return createTwit(token, tokenSecret)
  .then(twit => postAsync(twit, status))
  .catch(err => console.log(err));
}


export default twit = { post: post };
