process.env.NODE_ENV = 'test';

import { expect } from 'chai';

const config = require('../knexfile.js');
const knex = require('knex')(config['test']);

// const User = require('../server/Postgres/models/user');
const userController = require('../server/Postgres/controllers/userController');

describe('User', function() {
  beforeEach(function(done) {
    knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run())
    .then(() => done())
    .catch(err => console.log(err));
  });

  afterEach(function(done) {
    knex.migrate.rollback()
    .then(() => done())
    .catch(err => console.log(err));
  });

  it('Should find a user in the database', function(done) {
    userController.loginUser(
      { id: '12345', username: 'testuser' },
      'this is a token',
      'this is a tokensecret'
    ).then(response => {
      expect(response).to.have.lengthOf(1);
      expect(response[0]).to.equal('12345');
      done(null, response);
    })
    .catch(err => done(err));
  });
});

// { directory: '../server/Postgres/migrations' }
// { directory: '../server/Postgres/seeds/test' }
