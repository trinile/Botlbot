import {
  POST_TWEET,
} from '../app/App_constants.js';
import {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
} from '../app/App_actions_requestStatus';
import fetch from 'isomorphic-fetch';

// id is bot_tweet_id from generatedtweets table

export function postTweet(id) {
  return {
    type: POST_TWEET,
    id,
  };
}

// function called when User posts tweet to Twitter.
export function postTweetAsync(id) {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('/tweets/' + id, { method: 'POST', credentials: 'same-origin' })
      .then(res => {
        if (res.status === 201) {
          dispatch(fetchSuccess());
          dispatch(postTweet(id));
        } else if (res.status === 500) {
          dispatch(fetchFailure(res.status));
        }
      })
      .catch(err => dispatch(fetchFailure(err)));
  };
}
