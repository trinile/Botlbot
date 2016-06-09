import * as TYPE from '../client/app/App_constants';

import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import tweets from '../client/tweets/Tweets_reducer';
import authStatus from '../client/auth/Auth_reducer';
import tweetsFilter from '../client/tweets/Tweets_reducer_tweetsFilter';

// import templates from '../public/client/reducers/templates';
import chunkInProgress from '../client/templateChunk/TemplateChunk_reducer_inProgress';

describe('Tweets Reducers', function () {

  describe('Adding Tweets', function () {
    const stateBefore1 = [];
    const stateBefore2 = [
      { bot_tweet_id: 0, tweet_text: 'not empty in here', tweet_status: 'available' },
    ];
    const action = {
      type: TYPE.ADD_NEW_TWEETS,
      tweets: [
        { bot_tweet_id: 1, tweet_text: 'new tweet' },
        { bot_tweet_id: 2, tweet_text: 'another tweet' },
      ],
    };
    const stateAfter1 = [
      { bot_tweet_id: 1, tweet_text: 'new tweet' },
      { bot_tweet_id: 2, tweet_text: 'another tweet' },
    ];
    const stateAfter2 = [
      { bot_tweet_id: 1, tweet_text: 'new tweet' },
      { bot_tweet_id: 2, tweet_text: 'another tweet' },
    ];

    before('calls deep freeze to ensure no mutations', function () {
      deepFreeze(stateBefore1);
      deepFreeze(stateBefore2);
      deepFreeze(action);
    });

    it('Should add new tweets to an empty state', function () {
      expect(tweets(stateBefore1, action)).to.deep.equal(stateAfter1);
    });

    it('Should replace new tweets to a non-empty state', function () {
      expect(tweets(stateBefore2, action)).to.deep.equal(stateAfter2);
    });
  });

  describe('Posting Tweets', function() {
    const stateBefore = [
      { bot_tweet_id: 0, tweet_text: 'not empty in here', tweet_status: 'available' },
      { bot_tweet_id: 1, tweet_text: 'new tweet', tweet_status: 'available' },
      { bot_tweet_id: 2, tweet_text: 'another tweet', tweet_status: 'available' },
    ];
    const action = {
      type: TYPE.POST_TWEET,
      id: 1,
    };
    const stateAfter = [
      { bot_tweet_id: 0, tweet_text: 'not empty in here', tweet_status: 'available' },
      { bot_tweet_id: 1, tweet_text: 'new tweet', tweet_status: 'posted' },
      { bot_tweet_id: 2, tweet_text: 'another tweet', tweet_status: 'available' },
    ];

    before('calls deep freeze to ensure no mutations', function() {
      deepFreeze(stateBefore);
      deepFreeze(action);
    });

    it('Should toggle a tweet as posted', function() {
      expect(tweets(stateBefore, action)).to.have.deep.property('[1].tweet_status', 'posted');
    });

    it('Should not remove the posted tweet from the state', function() {
      expect(tweets(stateBefore, action)).to.deep.equal(stateAfter);
    });
  });

  describe('Trashing Tweets', function () {
    const stateBefore = [
      { bot_tweet_id: 0, tweet_text: 'not empty in here', tweet_status: 'available' },
      { bot_tweet_id: 1, tweet_text: 'new tweet', tweet_status: 'available' },
      { bot_tweet_id: 2, tweet_text: 'another tweet', tweet_status: 'available' },
    ];
    const action = {
      type: TYPE.TRASH_TWEET,
      id: 2,
    };
    const stateAfter = [
      { bot_tweet_id: 0, tweet_text: 'not empty in here', tweet_status: 'available' },
      { bot_tweet_id: 1, tweet_text: 'new tweet', tweet_status: 'available' },
      { bot_tweet_id: 2, tweet_text: 'another tweet', tweet_status: 'trashed' },
    ];

    before('calls deep freeze to ensure no mutations', function () {
      deepFreeze(stateBefore);
      deepFreeze(action);
    });

    it('Should toggle a tweet as trashed', function () {
      expect(tweets(stateBefore, action)).to.have.deep.property('[2].tweet_status', 'trashed');
    });

    it('Should not remove the trashed tweet from the state', function () {
      expect(tweets(stateBefore, action)).to.deep.equal(stateAfter);
    });
  });

  describe('Editing Tweet Request', function() {
    const stateBefore = [
    { bot_tweet_id: 0, tweet_text: 'not empty in here', tweet_status: 'available' },
    { bot_tweet_id: 1, tweet_text: 'new tweet', tweet_status: 'available' },
    { bot_tweet_id: 2, tweet_text: 'another tweet', tweet_status: 'available' },
    ];

    const action = {
      type: TYPE.EDIT_TWEET_REQUEST,
      id: 1,
    };

    const stateAfter = [
    { bot_tweet_id: 0, tweet_text: 'not empty in here', tweet_status: 'available' },
    { bot_tweet_id: 1, tweet_text: 'new tweet', tweet_status: 'available', editing: true },
    { bot_tweet_id: 2, tweet_text: 'another tweet', tweet_status: 'available' },
    ];

    before('calls deep freeze to ensure no mutations', function () {
      deepFreeze(stateBefore);
      deepFreeze(action);
    });

    it('Should toggle a tweet as editing', function () {
      expect(tweets(stateBefore, action)).to.have.deep.property('[1].editing', true);
    });

    it('Should not change the status of tweet', function () {
      expect(tweets(stateBefore, action)).to.have.deep.property('[1].tweet_status', 'available');
    });

    it('Should not remove the edited tweet from the state', function () {
      expect(tweets(stateBefore, action)).to.deep.equal(stateAfter);
    });

  });

  describe('Editing Tweet', function() {

    const stateBefore = [
    { bot_tweet_id: 0, tweet_text: 'not empty in here', tweet_status: 'available' },
    { bot_tweet_id: 1, tweet_text: 'new tweet', tweet_status: 'available', editing: true },
    { bot_tweet_id: 2, tweet_text: 'another tweet', tweet_status: 'available' },
    ];
    const action = {
      type: TYPE.EDIT_TWEET,
      id: 1,
      tweet_text: 'This tweet has been edited'
    }

    const stateAfter = [
    { bot_tweet_id: 0, tweet_text: 'not empty in here', tweet_status: 'available' },
    { bot_tweet_id: 1, tweet_text: 'this tweet has been edited', tweet_status: 'available', editing: false },
    { bot_tweet_id: 2, tweet_text: 'another tweet', tweet_status: 'available' },
    ];

    before('calls deep freeze to ensure no mutations', function () {
      deepFreeze(stateBefore);
      deepFreeze(action);
    });

    it('Should toggle a tweet as no longer editing', function() {
      expect(tweets(stateBefore, action)).to.have.deep.property('[1].editing', false);
    });
    it('Should not change the status of the tweet', function() {
      expect(tweets(stateBefore, action)).to.have.deep.property('[1].tweet_status', 'available');
    });
    it('Should change the tweet text', function() {
      expect(tweets(stateBefore, action)).to.have.deep.property('[1].tweet_text', 'This tweet has been edited');
    });
  });

  describe('Cancel Editing Tweet', function() {

    const stateBefore = [
    { bot_tweet_id: 0, tweet_text: 'not empty in here', tweet_status: 'available' },
    { bot_tweet_id: 1, tweet_text: 'no editing here', tweet_status: 'available', editing: true },
    { bot_tweet_id: 2, tweet_text: 'another tweet', tweet_status: 'available' },
    ];
    const action = {
      type: TYPE.CANCEL_EDIT_TWEET,
      id: 1,
    }

    const stateAfter = [
    { bot_tweet_id: 0, tweet_text: 'not empty in here', tweet_status: 'available' },
    { bot_tweet_id: 1, tweet_text: 'no editing here', tweet_status: 'available', editing: false },
    { bot_tweet_id: 2, tweet_text: 'another tweet', tweet_status: 'available' },
    ];

    before('calls deep freeze to ensure no mutations', function () {
      deepFreeze(stateBefore);
      deepFreeze(action);
    });

    it('Should toggle a tweet as no longer editing', function() {
      expect(tweets(stateBefore, action)).to.have.deep.property('[1].editing', false);
    });
    it('Should not change the status of the tweet', function() {
      expect(tweets(stateBefore, action)).to.have.deep.property('[1].tweet_status', 'available');
    });
    it('Should NOT change the tweet text', function() {
      expect(tweets(stateBefore, action)).to.deep.equal(stateAfter);
      expect(tweets(stateBefore, action)).to.have.deep.property('[1].tweet_text', 'no editing here');
    });
  });
  describe('Scheduling Tweet', function() {

    const stateBefore = [
    { bot_tweet_id: 0, tweet_text: 'not empty in here', tweet_status: 'available' },
    { bot_tweet_id: 1, tweet_text: 'new tweet', tweet_status: 'available' },
    { bot_tweet_id: 2, tweet_text: 'another tweet', tweet_status: 'available' },
    ];
    const action = {
      type: TYPE.SCHEDULE_TWEET,
      id: 1,
      schedule: '1463443200',
    };

    const stateAfter = [
    { bot_tweet_id: 0, tweet_text: 'not empty in here', tweet_status: 'available' },
    { bot_tweet_id: 1, tweet_text: 'new tweet', tweet_status: 'scheduled', schedule: '1463443200'},
    { bot_tweet_id: 2, tweet_text: 'another tweet', tweet_status: 'available' },
    ];

    before('calls deep freeze to ensure no mutations', function () {
      deepFreeze(stateBefore);
      deepFreeze(action);
    });

    it('Should change tweet status to scheduled', function() {
      expect(tweets(stateBefore, action)).to.have.deep.property('[1].tweet_status', 'scheduled');
    });
    it('Should have new property schedule in unix timestamp', function() {
      expect(tweets(stateBefore, action)).to.have.deep.property('[1].schedule', '1463443200');
    });
  });

});

describe('Tweets Filter Reducer', function() {

  const stateBefore = [
  { bot_tweet_id: 0, tweet_text: 'not empty in here', tweet_status: 'available' },
  { bot_tweet_id: 1, tweet_text: 'i\'ve been posted in the db', tweet_status: 'posted_in_db' },
  { bot_tweet_id: 2, tweet_text: 'another tweet', tweet_status: 'scheduled_in_db' },
  { bot_tweet_id: 3, tweet_text: 'i\'ve been posted in db', tweet_status: 'posted_in_db' },
  { bot_tweet_id: 4, tweet_text: 'trashed tweet', tweet_status: 'trashed' },
  ];

  const action = {
    type: TYPE.TWEETS_FILTER,
    filter: 'SHOW POSTED',
  };

  const stateAfter = [
  { bot_tweet_id: 0, tweet_text: 'not empty in here', tweet_status: 'available' },
  { bot_tweet_id: 1, tweet_text: 'i\'ve been posted in the db', tweet_status: 'posted_in_db' },
  { bot_tweet_id: 2, tweet_text: 'another tweet', tweet_status: 'scheduled_in_db' },
  { bot_tweet_id: 3, tweet_text: 'i\'ve been posted in db', tweet_status: 'posted_in_db' },
  { bot_tweet_id: 4, tweet_text: 'trashed tweet', tweet_status: 'trashed' },
  ];

  it('Should not change the state', function() {
    expect(tweets(stateBefore, action)).to.have.deep.equal(stateAfter);
  });

});

describe('Auth Reducers', function () {
  const loggedOutState = { isAuthenticated: false, isFetching: false };
  const loggedInState = { isAuthenticated: true, isFetching: false };

  it('Should successfully login', function () {
    expect(authStatus(loggedOutState, { type: TYPE.LOGIN_SUCCESS })).to.deep.equal(loggedInState);
  });

  it('Should successfully logout', function () {
    expect(authStatus(loggedInState, { type: TYPE.LOGOUT_SUCCESS })).to.deep.equal(loggedOutState);
  });
});

xdescribe('Template Reducers', function() {
  
  describe('Updating a template', function() {

    const afterState = 'This is my tweet template.';
    const action = {
      type: 'UPDATE_TEMPLATE',
      template: 'This is my tweet template.'
    };

    it('Should update a template', function() {
      expect(templates(null, action)).to.equal(afterState);
    });
  });

  describe('Deleting a template', function() {

    const beforeState = 'This is my tweet template.';
    const afterState = '';
    const action = {
      type: 'TRASH_TEMPLATE'
    };

    it('Should delete a template', function() {
      expect(templates(beforeState, action)).to.equal(afterState);
    });
  });
});

describe('Chunk Reducers', function() {
  
  describe('Setting a chunkType', function() {

    const afterState = {chunkType: 'random word', params: null};
    const action = {
      type: 'SET_CHUNK_TYPE',
      chunkType: 'random word'
    };

    it('Should set a chunkType', function() {
      expect(chunkInProgress(undefined, action)).to.eql(afterState);
    });
  });

  describe('Updating params', function() {

    const beforeState = {chunkType: 'random word', params: null};
    const afterState = {chunkType: 'random word', params: {length: 5}};
    const action = {
      type: 'UPDATE_CHUNK',
      param: {length: 5}
    };

    it('Should update a chunk will null params', function() {
      expect(chunkInProgress(beforeState, action)).to.eql(afterState);
    });
  });
});
