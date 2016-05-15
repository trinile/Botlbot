const twit = require('../helpers').twit;
const User = require('../db/controllers/userController');
const tweets = require('../helpers').tweets;

function fetchByKeywords(token, tokenSecret, query) {
  return twit.get('/search/tweets', token, tokenSecret, query)
  .then(results => results)
  .catch(err => console.log(err));
}

function myTopTwentyFeed(id, keywords, n) {
  const query = twit.formatQuery(keywords);
  return User.getTokens(id)
  .then(auth => fetchByKeywords(auth.token, auth.tokenSecret, query))
  .then(res => tweets.filterTopN(res.statuses, n))
  .catch(err => console.log(err));
}

module.exports = myTopTwentyFeed;
