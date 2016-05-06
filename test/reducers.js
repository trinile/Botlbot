import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import tweets from '../public/client/reducers/tweets';

describe('Reducers', function(){

  describe('Tweets Reducers', function() {
    const stateBefore1 = [];
    const stateBefore2 = [
      {
        id: 0,
        text: 'not empty in here',
      },
    ];
    const action = {
      type: 'ADD_NEW_TWEETS',
      tweets: [
        {
          id: 1,
          text: 'new tweet',
        },
        {
          id: 2,
          text: 'another tweet',
        },
      ],
    };
    const stateAfter1 = [
      {
        id: 1,
        text: 'new tweet',
      },
      {
        id: 2,
        text: 'another tweet',
      },
    ];
    const stateAfter2 = [
      {
        id: 0,
        text: 'not empty in here',
      },
      {
        id: 1,
        text: 'new tweet',
      },
      {
        id: 2,
        text: 'another tweet',
      },
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
});
