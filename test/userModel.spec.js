process.env.NODE_ENV = 'test';

import { expect } from 'chai';

const config = require('../knexfile.js');
const knex = require('knex')(config.test);
const userController = require('../server/db/controllers/userController');

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
  describe('Login', function() {
    it('Should find existing user in the database', function(done) {
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

    it('Should update existing user\'s record on login', function(done) {
      userController.loginUser(
        { id: '12345', username: 'testuser' },
        'this is a new token',
        'this is a different tokensecret')
      .then(() => userController.getUserRecord('12345'))
      .then((response) => {
        const user = response[0];
        expect(user.user_twitter_id).to.equal('12345');
        expect(user.token).to.not.equal('this is a token');
        expect(user.token).to.equal('this is a new token');
        expect(user.tokenSecret).to.not.equal('this is a tokensecret');
        expect(user.tokenSecret).to.equal('this is a different tokensecret');
        expect(user.created_at).to.not.equal(user.updated_at);
        done(null, response);
      })
      .catch(err => done(err));
    });

    it('Should not find a new user', function(done) {
      const newUser = {
        profile: { id: '67890', username: 'newuser' },
        token: 'token',
        tokenSecret: 'tokensecret'
      };

      userController.getUserRecord(newUser.profile.id)
      .then(response => expect(response).to.have.lengthOf(0))
      .catch(err => done(err));

      done();
    });

    it('Should add a new user to the database', function(done) {
      const newUser = {
        profile: { id: '67890', username: 'newuser' },
        token: 'token',
        tokenSecret: 'tokensecret'
      };

      userController.loginUser(
        newUser.profile,
        newUser.token,
        newUser.tokensecret)
      .then(response => {
        expect(response).to.have.lengthOf(1);
        expect(response[0]).to.equal('67890');
        done(null, response);
      })
      .catch(err => done(err));
    });
  });
});
