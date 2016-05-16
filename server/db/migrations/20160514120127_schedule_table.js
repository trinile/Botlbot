
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('scheduledtweets', function(table) {
      table.increments('schedule_id').primary();
      table.string('scheduled_time');
    }),
    knex.schema.table('generatedtweets', function(table) {
      table.integer('schedule_id').references('schedule_id').inTable('scheduledtweets');
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return knex.schema.table('generatedtweets', function(table) {
    table.dropColumn('schedule_id');
  }).dropTable('scheduledtweets');
};
