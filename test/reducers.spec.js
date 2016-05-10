import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import tweets from '../public/client/reducers/tweets';
import authStatus from '../public/client/reducers/Auth'

describe('Tweets Reducers', function() {

  describe('Adding Tweets', function() {
    const stateBefore1 = [];
    const stateBefore2 = [
      { id_str: 0, text: 'not empty in here', posted: false, trashed: false },
    ];
    const action = {
      type: 'ADD_NEW_TWEETS',
      tweets: [
        { id_str: 1, text: 'new tweet' },
        { id_str: 2, text: 'another tweet' },
      ],
    };
    const stateAfter1 = [
      { id_str: 1, text: 'new tweet', posted: false, trashed: false },
      { id_str: 2, text: 'another tweet', posted: false, trashed: false },
    ];
    const stateAfter2 = [
      { id_str: 0, text: 'not empty in here', posted: false, trashed: false },
      { id_str: 1, text: 'new tweet', posted: false, trashed: false },
      { id_str: 2, text: 'another tweet', posted: false, trashed: false },
    ];

    before('calls deep freeze to ensure no mutations', function() {
      deepFreeze(stateBefore1);
      deepFreeze(stateBefore2);
      deepFreeze(action);
    });

    it('Should add new tweets to an empty state', function() {
      expect(tweets(stateBefore1, action)).to.deep.equal(stateAfter1);
    });

    it('Should add new tweets to a non-empty state', function() {
      expect(tweets(stateBefore2, action)).to.deep.equal(stateAfter2);
    });
  });

  describe('Posting Tweets', function() {
    const stateBefore = [
      { id_str: 0, text: 'not empty in here', posted: false, trashed: false },
      { id_str: 1, text: 'new tweet', posted: false, trashed: false },
      { id_str: 2, text: 'another tweet', posted: false, trashed: false },
    ];
    const action = {
      type: 'POST_TWEET',
      id: 1,
    };
    const stateAfter = [
      { id_str: 0, text: 'not empty in here', posted: false, trashed: false },
      { id_str: 1, text: 'new tweet', posted: true, trashed: false },
      { id_str: 2, text: 'another tweet', posted: false, trashed: false },
    ];

    before('calls deep freeze to ensure no mutations', function() {
      deepFreeze(stateBefore);
      deepFreeze(action);
    });

    it('Should toggle a tweet as posted', function() {
      expect(tweets(stateBefore, action)).to.have.deep.property('[1].posted', true);
    });

    it('Should not remove the posted tweet from the state', function() {
      expect(tweets(stateBefore, action)).to.deep.equal(stateAfter);
    });
  });

  describe('Trashing Tweets', function() {
    const stateBefore = [
      { id_str: 0, text: 'not empty in here', posted: false, trashed: false },
      { id_str: 1, text: 'new tweet', posted: false, trashed: false },
      { id_str: 2, text: 'another tweet', posted: false, trashed: false },
    ];
    const action = {
      type: 'TRASH_TWEET',
      id: 2,
    };
    const stateAfter = [
      { id_str: 0, text: 'not empty in here', posted: false, trashed: false },
      { id_str: 1, text: 'new tweet', posted: false, trashed: false },
      { id_str: 2, text: 'another tweet', posted: false, trashed: true },
    ];

    before('calls deep freeze to ensure no mutations', function() {
      deepFreeze(stateBefore);
      deepFreeze(action);
    });

    it('Should toggle a tweet as trashed', function() {
      expect(tweets(stateBefore, action)).to.have.deep.property('[2].trashed', true);
    });

    it('Should not remove the trashed tweet from the state', function() {
      expect(tweets(stateBefore, action)).to.deep.equal(stateAfter);
    });
  });
});

describe('Authentication Reducers', function() {
  const loggedOutState = false;
  const loggedInState = true;

  it('Should successfully login', function() {
    expect(authStatus(loggedOutState, { type: 'LOGIN_SUCCESS' })).to.be.true;
  });

  it('Should successfully logout', function() {
    expect(authStatus(loggedInState, { type: 'LOGOUT_SUCCESS' })).to.be.false;
  });
});
