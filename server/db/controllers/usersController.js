var db = require('../db.js');
var User = require('../models/userModel.js');

module.exports = {
  addUser: function(profile, token, tokenSecret) {
    // console.log(profile.id, token, tokenSecret);
    return user = db.knex('users')
      .where({ user_twitter_id: profile.id.toString() })
      .select()
      .then(function(user) {
        // if returns an empty array [], user doesn't exist
        console.log('users -------------> ', user);
        
        if (user.length === 0) {

          console.log('adddding-------->');

          return db.knex('users')
            .insert({ 
              user_twitter_id: profile.id, 
              token: token, 
              tokenSecret: tokenSecret
            });
        }
      })
      .catch(function(err) {
        console.log('error in adding user -------', err);
      });
  },

  retrieveUser: function(userId) {

    return db.knex('users')
      .where({ 'user_twitter_id': userId.toString()})
      .select();
      // will return an array of users that matches this specific id. or empty []
  },

  deleteUser: function(userId) {

    return db.knex('users')
      .where({ 'user_twitter_id': userId.toString() })
      .del();
    // returns the number of rows affected by query
  }
};
