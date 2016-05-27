import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../constants.js';
import { replace } from 'react-router-redux';
import fetch from 'isomorphic-fetch';

export const requestLogout = () => {
  return (
  {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  }
  );
};

export const receiveLogout = () => {
  return (
  {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
  }
  );
};

export const logoutFailure = (message) => {
  return (
  {
    type: LOGOUT_FAILURE,
    isFetching: false,
    isAuthenticated: true,
    message,
  }
  );
};

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    return fetch('/logout', { method: 'GET', credentials: 'same-origin'})
      .then(json => {
        console.log(json);
        localStorage.removeItem('sessionID');
        dispatch(receiveLogout());
        dispatch(replace('/'));
      })
      .catch(err => dispatch(logoutFailure(err)));
  };
}
