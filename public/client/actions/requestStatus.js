import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  POST_TWEET,
} from '../constants.js';
import fetch from 'isomorphic-fetch';

export function fetchRequest() {
  return {
    type: FETCH_REQUEST,
    isFetching: true,
  };
}

export function fetchSuccess() {
  return {
    type: FETCH_SUCCESS,
    isFetching: false,
    success: true,
  };
}

// takes in error message from postedTweetFailure
export function fetchFailure(message) {
  return {
    type: FETCH_FAILURE,
    isFetching: false,
    success: false,
    message,
  };
}

export function postTweet(id) {
  return {
    type: POST_TWEET,
    id,
  };
}
// id is generated tweet ID
export const postTweetAsync = (id) => {
  return dispatch => {
    dispatch(postRequest(id));
    return fetch('/postTweet/' + id, { method: 'POST', credentials: 'same-origin' })
      .then(res => {
        // if successful
        //COMMENT OUT conditional to test success
        // if (res.status === 201) {
          dispatch(postSuccess());
          dispatch(postTweet(id));
        // }
        // if (res.status === 404) {
        //   dispatch(postFailure(res.status));
        // }
      })
      .catch(err => {
        dispatch(postFailure(err));
      });
  };
};
