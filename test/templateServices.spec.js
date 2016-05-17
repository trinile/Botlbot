require('dotenv').config();
process.env.NODE_ENV = 'test';
import { expect } from 'chai';
import * as sinon from 'sinon';
const config = require('../knexfile.js');
const knex = require('knex')(config.test);
const text = require('../templateServices/text');
const myFeed = require('../templateServices/myFeed');
const keywordTweets = require('../templateServices/tweetsByKeyword');
const twitterResponse = require('./sampleTwitterResponse');

describe('Template Service', function() {
  const userId = '727615201575469056';
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

  describe('Text', function() {
    it('Should return an array of n copies of provided text', function() {
      expect(text('test', 3)).to.deep.equal(['test', 'test', 'test']);
      expect(text('another', 40)).to.have.lengthOf(40);
    });
    it('Should default to 20 copies of provided text', function() {
      expect(text('test')).to.have.lengthOf(20);
    });
  });

  xdescribe('Twitter: MyFeed', function() {
    it('Should return an array of n tweets', function(done) {
      myFeed(userId, 5)
      .then(res => {
        expect(res).to.have.lengthOf(5);
        done(null, res);
      })
      .catch(err => done(err));
    });

    it('Should default to top 20 tweets', function(done) {
      myFeed(userId)
      .then(res => {
        expect(res).to.have.lengthOf(20);
        done(null, res);
      })
      .catch(err => done(err));
    });
  });

  describe('Twitter: Keywords', function() {
    it('Should return tweets containing any of the keywords', function(done) {
      keywordTweets(userId, 'lobster hiking')
      .then(res => res.map(t => t.text))
      .then(statuses => {
        expect(statuses).to.exist;
        expect(statuses).to.be.an('array')
        expect(statuses).to.not.be.empty
        const hasLobster = statuses.some(status => status.includes('lobster'));
        const hasHiking = statuses.some(status => status.includes('hiking'));
        expect(hasHiking).to.be.true;
        expect(hasLobster).to.be.true;
        done(null, statuses);
      })
      .catch(err => done(err));
    });
  });
});
