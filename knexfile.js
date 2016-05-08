module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://localhost/botlbot_db',
    migrations: {
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: {
      database: 'botlbot_db',
      migrations: {
        tableName: 'migrations',
        directory: './server/db/migrations'
      },
      seeds: {
      directory: './server/db/seeds/development'
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