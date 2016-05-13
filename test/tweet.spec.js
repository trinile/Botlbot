require('dotenv').config();
process.env.NODE_ENV = 'test';

import { expect } from 'chai';

const config = require('../knexfile.js');
const knex = require('knex')(config.test);
const Tweet = require('../server/db/controllers/tweetsController');
const twit = require('../server/helpers');
const twitterResponse = require('./sampleTwitterResponse');


describe('Tweet', function() {
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

  describe('Post', function() {
    it('Should join tweet and user info from database', function(done) {
      Tweet.joinTweetAndUserByTweetId('1')
      .then(res => {
        expect(res).to.exist;
        expect(res).to.have.all.keys(['token', 'tokenSecret', 'tweet_text']);
        done(null, res);
      })
      .catch(err => done(err));
    });

    it('Should successfully post to Twitter', function(done) {
      const tweet_text = 'a test generated tweet ' + Math.random();
      const join = {
        tweet_text,
        token: '727615201575469056-j4ZG03wgkgJ33RamEr9EPBFeIoEnkR0',
        tokenSecret: 'ecbv7GmYnPjxZ96NRcXgtPwAZjcmPfGXubq3UPhx3P1qO',
      };

      twit.post(join)
      .then(data => {
        expect(data).to.exist;
        expect(data).to.have.deep.property('user.id_str', '727615201575469056');
        expect(data).to.have.property('text', tweet_text);
        done(null, data);
      })
      .catch(err => done(err));
    });

    it('Should save posted tweet to database', function(done) {
      Tweet.savePostedTweet(twitterResponse)
      .then(response => {
        expect(response).to.exist;
        expect(response).to.have.lengthOf(1);
        expect(response[0]).to.equal('730494867059527680');
        done(null, response);
      })
      .catch(err => done(err));
    });
  });
});
