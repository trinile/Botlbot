import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from './App_constants.js';

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
