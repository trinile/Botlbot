
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('scheduledtweets', function(table) {
      table.increments('schedule_id').primary();
      table.string('scheduled_time');
    }),
    knex.schema.table('generatedtweets', function(table) {
      table.integer('schedule_id').references('schedule_id').inTable('scheduledtweets');
      table.dropUnique('tweet_id_str');
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('scheduledtweets'),
    knex.schema.table('generatedtweets', function(table) {
      table.dropColumn('schedule_id')
      table.string('tweet_id_str').unique();
    }),
  ]);
};
