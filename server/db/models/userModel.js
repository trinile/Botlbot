var db = require('../db.js');
// db.knex or db.bookshelf
var Tweet = require('./tweetModel.js');

var User = db.bookshelf.Model.extend({
  tableName: 'users',
  postedTweets: function() {
    return this.hasMany(Tweet.postedTweets)
  },
  generatedTweets: function() {
    return this.hasMany(Tweet.generatedTweets)
  }
});

module.exports = User;

db.knex.schema.dropTableIfExists('users');

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function(table) {
      table.increments('user_id').primary();
      table.string('user_twitter_id').primary;
      table.string('token');
      table.string('tokenSecret');
      table.string('username');
      table.string('email');
      table.timestamps();
    })
    .then(function(userTable) {
      console.log('Users table created ----', userTable);
    })
    .catch(function(err) {
      console.log('Users table not created ------', err);
    })
  }
});


