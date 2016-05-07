var db = require('../db.js');
var User = require('../models/userModel.js');

module.exports = {
  addUser: function(profile, token, tokenSecret) {
    // console.log(profile.id, token, tokenSecret);
    return user = db.knex('users')
      .where({ user_twitter_id: profile.id })
      .select()
      .then(function(user) {
        // if returns an empty array [], user doesn't exist
        if (user.length === 0) {
          db.knex('users').insert({ 
            user_twitter_id: profile.id, 
            token: token, 
            tokenSecret: tokenSecret
          })
        }
      })
      .catch(function(err) {
        console.log('error in adding user -------', err);
      });
  },

  retrieveUser: function(userId) {
    //array can be any columns you wish to retrieve e.g. token, tokenSecret
    var args = Array.prototype.slice.call(arguments, 1);
    
    return db.knex('users')
      .where({ 'user_twitter_id': userId })
      .select();
      //will return an array of users that matches this specific id. or empty []
  },

  deleteUser: function(userId) {
    return db.knex('users')
      .where({ 'user_twitter_id': userId })
      .del()
    // returns the number of rows affected by query
  }
}