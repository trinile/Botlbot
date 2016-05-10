const Bookshelf = require('../db');
// const PostedTweet = require('./postedTweet');
const User = require('./user');

const User = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  users: () => this.belongsTo(User)
});

module.exports = User;
