var client = require('../redisClient.js');

module.exports = {
  addUser : function(profile, token, tokenSecret) {
    client.hmset('user:' + profile.id, 'token', token, 'tokenSecret', tokenSecret);
  },

  retrieveUser : function(id) {
    var args = Array.prototype.slice.call(arguments, 1);
    return client.hmgetAsync('user:' + id, args);
  },

};