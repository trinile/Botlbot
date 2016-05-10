// model for tweet that is posted by user
var db = require('../db.js');
var User = require('./userModel.js');

var PostedTweet = db.bookshelf.Model.extend({
  tableName: 'postedTweets',
  user: function() {
    return this.belongsTo(User)
  }
});

var GeneratedTweet = db.bookshelf.Model.extend({
  tableName: 'generatedTweet',
  user: function() {
    return this.belongsTo(User);
  }
});

module.exports = {
  postedTweet: PostedTweet,
  generatedTweet: GeneratedTweet
};

// table for Posted Tweets that User posts to twitter
db.knex.schema.hasTable('postedtweets').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('postedtweets', function(table){
      table.increments('tweet_id').primary();
      table.string('user_id'); //.unsigned().references('user_id').inTable('users');
      table.string('tweet_text');
      table.string('tweet_url');
      table.string('original_tweet_id');
      table.string('original_tweet_props');
      table.integer('favorite_count');
      table.integer('retweet_count');
      table.timestamps();
    }).then(function(tweetTable) {
      console.log('Created table of postedTweets', tweetTable);
    })
  }
});

// table for Generated Tweets by App
db.knex.schema.hasTable('generatedtweets').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('generatedtweets', function(table) {
      table.increments('bot_tweet_id').primary();
      // TODO: have foreign key constraint to work
      table.string('user_id'); //.unsigned().references('user_id').inTable('users');
      table.integer('retweet_count');
      table.integer('favorite_count');
      table.string('user_screen_name');
      table.string('user_followers_count');
      // table.string('tweet_body');
      // table.string('tweet_body_url');
      table.string('tweet_text');
      table.string('tweet_id_str').unique();
      table.timestamps();
    }).then(function(generatedTable) {
      console.log('Created table of Generated Tweets', generatedTable);
    })
    .catch(function(err) {
      console.log('error in creating generated tweets');
    })
  }
});
