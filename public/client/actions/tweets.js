import {
  ADD_NEW_TWEETS,
  POST_TWEET,
  TRASH_TWEET,
  EDIT_TWEET,
  EDIT_TWEET_REQUEST,
  CANCEL_EDIT_TWEET,
} from '../constants.js';
import { fetchRequest, fetchSuccess, fetchFailure } from './requestStatus';

export function requestEdit(id) {
  return {
    type: EDIT_TWEET_REQUEST,
    id,
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
export function addTweets(tweets) {
  return {
    type: ADD_NEW_TWEETS,
    tweets,
  };
}

export function postTweet(id) {
  return {
    type: POST_TWEET,
    id,
  };
}

export function trashTweet(id) {
  return {
    type: TRASH_TWEET,
    id,
  };
}

//set into local storage
//this should probably be called when dashboard mounts and user is authenticated
//makes a call to api to retrieve most current tweets in database

export function getTweetsAsync() {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('http://127.0.0.1:1337/getgenerate', { method: 'GET', credentials: 'same-origin'})
      .then(result => result.json())
      .then(result => {
        localStorage.setItem('tweets', JSON.stringify(result));
        return dispatch(addTweets(result));
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchFailure(err));
      });
  };
};

// id is generated tweet ID
export function postTweetAsync(id) {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('http://127.0.0.1:1337/postTweet/' + id, { method: 'POST', credentials: 'same-origin' })
      .then(res => {
        // if successful
        //COMMENT OUT conditional to test success
        // if (res.status === 201) {
          dispatch(fetchSuccess());
          dispatch(postTweet(id));
        // }
        // if (res.status === 404) {
        //   dispatch(postFailure(res.status));
        // }
      })
      .catch(err => {
        dispatch(fetchFailure(err));
      });
  };
};
