import {
  EDIT_TWEET,
  EDIT_TWEET_REQUEST,
  CANCEL_EDIT_TWEET,
} from '../app/App_constants.js';
import {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
} from '../app/App_actions_requestStatus';

// id is bot_tweet_id from generatedtweets table

export function requestEdit(id, tweet_text) {
  console.log('tweet text', tweet_text);
  return {
    type: EDIT_TWEET_REQUEST,
    id,
    tweet_text,
  };
}
export function editTweet(id, tweet_text) {
  return {
    type: EDIT_TWEET,
    id,
    tweet_text,
  };
}

export function cancelEditTweet(id) {
  return {
    type: CANCEL_EDIT_TWEET,
    id,
  };
}

export function editTweetAsync(id, tweet_text) {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('/tweets/' + id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'same-origin',
      body: JSON.stringify({ text: tweet_text }),
    })
    .then(res => {
      if (res.status === 201) {
        dispatch(fetchSuccess());
        dispatch(editTweet(id, tweet_text));
      } else if (res.status === 500) {
        dispatch(fetchFailure(res.status));
      }
    })
    .catch(err => dispatch(fetchFailure(err)));
  };
}
