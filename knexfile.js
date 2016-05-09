module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      database: 'botlbot_db_test',
      migrations: {
        tablename: 'migrations_test',
        directory: __dirname + './server/db/migrations'
      },
      seeds: {
        directory: __dirname + './server/db/seeds/test'
      }
    }
  },
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      database: 'botlbot_db',
      migrations: {
        tableName: 'migrations',
        directory: __dirname + './server/db/migrations'
      },
      seeds: {
        directory: __dirname + './server/db/seeds/development'
      }
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds/production'
    }
  },
};

/*
need to npm install knex -g 
to use knex commands
e.g. knex migrate:make tweets_db

*/