// const User = require('../models/user.js');
const knex = require('../db');
/**
*
*/
function login(profile, token, secret) {
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
      token: token,
      tokenSecret: secret,
      username: profile.username,
      updated_at: new Date(),
      created_at: new Date()
    }, 'user_twitter_id');
  });
}

function getRecord(userId) {
  return knex('users')
    .where({ user_twitter_id: userId })
    .select();
}

module.exports = {
  login: login,
  getRecord: getRecord
};
