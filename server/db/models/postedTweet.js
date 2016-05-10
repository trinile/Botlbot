const Bookshelf = require('../db');
// const GeneratedTweet = require('./generatedtweets');
const User = require('./user');

const PostedTweet = Bookshelf.Model.extend({
  tableName: 'postedTweets',
  hasTimestamps: true,
  users: () => this.belongsTo(User)
});

module.exports = PostedTweet;
