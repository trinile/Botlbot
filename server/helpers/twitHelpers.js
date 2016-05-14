const Twit = require('twit');
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

function postAsync(status, twit) {
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

function getAsync(url, twit) {
  return new Promise(function(resolve, reject) {
    twit.get(
      url,
      { count: 200 },
      function(err, data, response) {
        if (err) reject(err);
        // resolve({ data: data, response: response });
        resolve(data);
      }
    );
  });
}

function post(status, token, tokenSecret) {
  return createTwit(token, tokenSecret)
  .then(twit => postAsync(status, twit))
  .catch(err => console.log(err));
}

function get(url, token, tokenSecret) {
  return createTwit(token, tokenSecret)
  .then(twit => getAsync(url, twit))
  .catch(err => console.log(err));
}

module.exports = { post: post, get: get };
