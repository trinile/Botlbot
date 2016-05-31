import { fetchRequest, fetchSuccess, fetchFailure } from './actions_requestStatus.js';
import fetch from 'isomorphic-fetch';

const tweetRequest = (action, body) => {
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