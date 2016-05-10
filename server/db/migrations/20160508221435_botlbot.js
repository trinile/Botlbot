
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.string('user_twitter_id').primary();
      table.string('token');
      table.string('tokenSecret');
      table.string('username');
      table.string('email');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('postedtweets', function(table){
      table.increments('tweet_id').primary();
      table.string('user_twitter_id');

      // table.foreign('user_twitter_id').references('user_twitter_id').inTable('users');
      table.string('tweet_text');
      table.string('tweet_url');
      table.string('original_tweet_id');
      table.string('original_tweet_props');
      table.integer('favorite_count');
      table.integer('retweet_count');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('generatedtweets', function(table) {
      table.increments('bot_tweet_id').primary();
      table.string('user_twitter_id');

      // table.foreign('user_twitter_id').references('user_twitter_id').inTable('users');
      table.integer('retweet_count');
      table.integer('favorite_count');
      table.string('user_screen_name');
      table.string('user_followers_count');
      table.string('tweet_text');
      table.string('tweet_id_str').unique();
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('postedtweets'),
    knex.schema.dropTable('generatedtweets'),
  ]);
};
