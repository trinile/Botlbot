const knex = require('../db');

function login(profile, token, secret) {
  return knex('users').where({
    user_twitter_id: profile.id
  }).then(usr => {
    if (usr.length === 1) {
      return knex('users').where({
        user_twitter_id: profile.id
      }).update({
        profile_img: profile._json.profile_image_url,
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
      profile_img: profile._json.profile_image_url,
      updated_at: new Date(),
      created_at: new Date()
    }, 'user_twitter_id');
  });
}

function getRecord(userId) {
  return knex('users')
    .where({ user_twitter_id: userId })
    .select()
    .then(results => results[0]);
}

function getTokens(userId) {
  return knex('users')
    .where({ user_twitter_id: userId })
    .select('token', 'tokenSecret')
    .then(results => results[0]);
}

function getUserInfo(userId) {
  return knex('users')
    .where({user_twitter_id: userId })
    .select('username', 'profile_img')
}

module.exports = {
  login: login,
  getRecord: getRecord,
  getTokens: getTokens,
  getUserInfo: getUserInfo,
};
