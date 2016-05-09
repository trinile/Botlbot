var config      = require('../../knexfile.js');  
var env         = process.env.NODE_ENV ||'development';  
var knex        = require('knex')(config[env]);

module.exports = {
  knex: knex,
  bookshelf: require('bookshelf')(knex)
};

//DROP DATABASE IF IT EXISTS
// knex.raw('DROP DATABASE IF EXISTS botlbot_db')
//   .then(function(dropped) {
//     console.log('database dropped');
//   });
// // knex.raw('DROP DATABASE IF EXISTS botlbot_db_test');

// knex.raw('CREATE DATABASE botlbot_db')
//   .then(function(created) {
//     console.log('botlbot_db created ------------>', created);
//   })
//   .catch(function(err) {
//     console.error('error in creating database ------->', err);
//   })

// knex.raw('CREATE DATABASE botlbot_db_test')
//   .then(function(created) {
//     console.log('botlbot_db_test created ------------>', created);
//   })
//   .catch(function(err) {
//     console.error('error in creating database_test ------->', err);
//   })

// module.exports = knex;

//useful for debugging
process.stderr.on('data', function(data) {
  console.log(data);
});

/*
  Dev: 
  Must have Postgres server running
  In command line to start PSQL: 
    psql 
    
  Create database called botlbot_db in Command Line
    CREATE DATABASE botlbot_db;
  To drop database
    DROP DATABASE <dbname>;
  To drop table:
    DROP TABLE <tablename>;
  Useful commands in Psql
  \l  : shows you list of databases 
  \c <database name> : connect to the database
  \dt : shows you list of tables in database
  select * from <table>; : shows all entries in table
  \q : quit from psql
  At the moment, database is deleted with each schema change
*/

// knex.migrate.latest([config]); 

/*
Migrations are knex's way of developing and generating schema. 
Each migrations folder is implemented with version control which enables 
the developer to maintain a history of their database schema. A lot like a commit 
history for git. For example, if we wanted to alter a table, rename a column, 
change value type, etc, we could generate a new migration and make it live without 
sacrificing our original database structure.

create migration with: in terminal type:
  knex migrate:make botlbot_db

for app to run latest schema: in termal type:
  knex.migrate.latest([config])
*/
