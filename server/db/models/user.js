const knex = require('../db');
const PostedTweet = require('./postedTweet');

const User = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  postedtweets: () => this.hasMany(PostedTweet),
  generatedtweets: () => this.hasMany(GeneratedTweet),
  byTwitterId: (id) => (
    User.forge().query({ where: { user_twitter_id: id } }).fetch()
  ),
  updateUser: (token, secret) => (
    this.set({
      token: token,
      tokenSecret: secret,
      updated_at: new Date()
    })
    .save()
  ),
  addUser: (profile, token, secret) => (
    this.set({
      user_twitter_id: profile.id,
      username: profile.username,
      token: token,
      tokenSecret: secret
    })
    .save()
  )
});

module.exports = User;
