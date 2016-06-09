import {
  TRASH_TWEET,
} from '../app/App_constants.js';
import { fetchRequest, fetchSuccess, fetchFailure } from '../app/App_actions_requestStatus';
import fetch from 'isomorphic-fetch';

// id is bot_tweet_id from generatedtweets table 

export function trashTweet(id) {
  return {
    type: TRASH_TWEET,
    id,
  };
}

// trashing a tweet by user only changes tweet_status to 'trashed'
// actual deleting from database to be handled by a worker.
export function trashTweetAsync(id) {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('/tweets/' + id, { method: 'DELETE', credentials: 'same-origin' })
      .then(res => {
        if (res.status === 201) {
          dispatch(fetchSuccess());
          dispatch(trashTweet(id));
        } else if (res.status === 500) {
          dispatch(fetchFailure(res.status));
        }
      })
      .catch(err => dispatch(fetchFailure(err)));
  };
}
