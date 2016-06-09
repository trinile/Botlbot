import {
  ADD_NEW_TWEETS,
  POSTED_TWEETS,
  SCHEDULED_TWEETS,
} from '../app/App_constants.js';
import { fetchRequest, fetchFailure } from '../app/App_actions_requestStatus';
import fetch from 'isomorphic-fetch';

// id is bot_tweet_id from generatedtweets table
export function getTweets(tweets) {
  return {
    type: ADD_NEW_TWEETS,
    tweets,
  };
}

export function getPostedTweets(postedtweets) {
  return {
    type: POSTED_TWEETS,
    postedtweets,
  };
}

export function getScheduledTweets(scheduledtweets) {
  return {
    type: SCHEDULED_TWEETS,
    scheduledtweets,
  };
}

// Below are async actions that will make a request to API endpoint
// this function is called when Dashboard is mounted.
export function getTweetsAsync(page) {
  console.log('CLIENT SIDE PAGE IS', page);
  page = page || 0;
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('/tweets/generated?page=' + page,
      { method: 'GET', credentials: 'same-origin' })
      .then(result => result.json())
      .then(result => dispatch(getTweets(result)))
      .catch(err => dispatch(fetchFailure(err)));
  };
}

// this function is called when PostedTweetsContainer is mounted.
export function getPostedTweetsAsync() {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('/tweets/posted', { method: 'GET', credentials: 'same-origin'})
      .then(result => result.json())
      .then(result => dispatch(getPostedTweets(result)))
      .catch(err => dispatch(fetchFailure(err)));
  };
}

// this function is called when ScheduledTweetsContainer is mounted.
export function getScheduledTweetsAsync() {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('/tweets/scheduled',
      { method: 'GET', credentials: 'same-origin' })
      .then(result => result.json())
      .then(result => dispatch(getScheduledTweets(result)))
      .catch(err => dispatch(fetchFailure(err)));
  };
}
