import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../app/App_constants.js';
import fetch from 'isomorphic-fetch';

export const requestLogin = () => (
  {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
  }
);

export const receiveLogin = () => (
  {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
  }
);

export const loginError = (message) => (
  {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  }
);

export const authUser = () => {
  return dispatch => {
    dispatch(requestLogin());
    return fetch('/authenticate', { method: 'GET', credentials: 'same-origin' })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('authID', json.authID);
        dispatch(receiveLogin());
      })
      .catch(err => dispatch(loginError(err)));
  };
};
