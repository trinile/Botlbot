// const User = require('../models/user.js');
const knex = require('../db');


function loginUser(profile, token, secret) {
  return knex('users').where({
    user_twitter_id: profile.id
  }).then(usr => {
    if (usr.length === 1) {
      return knex('users').where({
        user_twitter_id: profile.id
      }).update({
        token: token,
        tokenSecret: secret,
        updated_at: new Date()
      }, 'user_twitter_id');
    }
    return knex('users').insert({
      user_twitter_id: profile.id,
      username: profile.username,
      token: token,
      tokenSecret: secret,
      email: 'flkdfj',
      updated_at: new Date(),
      created_at: new Date()
    }, 'user_twitter_id');
  });
}

module.exports.loginUser = loginUser;
