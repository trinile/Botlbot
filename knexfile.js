// Update with your config settings.

module.exports = {

  other: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: 'botlbot_db_test'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './server/Postgres/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './server/Postgres/seeds/test'
    }
  },

  development: {
    client: 'pg',
    connection: {
      database: 'botlbot_db'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './server/Postgres/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './server/Postgres/seeds/development',
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
