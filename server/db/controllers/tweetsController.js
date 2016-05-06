var client = require('../redisClient.js');

module.exports = {
  addTweets : function(id, jsonTweets) {
    return client.lpushAsync('tweetlist:user:' + id, jsonTweets);
  },

  retrieveTweets : function(id) {
    return client.lrangeAsync('tweetlist:user:' + id, 0, 20);
  }

};