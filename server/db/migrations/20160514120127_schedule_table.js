
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('scheduledtweets', function(table) {
      table.increments('schedule_id').primary();
      table.string('scheduled_time');
    }),
    knex.schema.table('generatedtweets', function(table) {
      table.integer('schedule_id').references('schedule_id').inTable('scheduledtweets');
    }),
    knex.schema.createTable('templates', function(table) {
      table.increments('template_id').primary();
      table.jsonb('template');
      table.string('name');
      table.boolean('active');
      table.string('user_twitter_id').references('user_twitter_id').inTable('users');
    })
  ]);
};

exports.down = function (knex, Promise) {
  return knex.schema.table('generatedtweets', function(table) {
    table.dropColumn('schedule_id');
  }).dropTable('scheduledtweets')
  .dropTable('templates');
};
