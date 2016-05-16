const twit = require('./helpers').twit;
const tweets = require('./helpers').tweets;
const User = require('../server/db/controllers/userController');


function fetchFromFeed(token, tokenSecret) {
  return twit.get('/statuses/home_timeline', token, tokenSecret)
  .then(results => results)
  .catch(err => console.log(err));
}

function myTopTwentyFeed(id, n) {
  return User.getTokens(id)
  .then(auth => fetchFromFeed(auth.token, auth.tokenSecret))
  .then(results => tweets.filterTopN(results, n))
  .catch(err => console.log(err));
}

module.exports = myTopTwentyFeed;
