//logs the user out
import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../constants.js';
import { replace } from 'react-router-redux';
import fetch from 'isomorphic-fetch';
//three possible states for logging out.
//need three actions.
//actions are useful if we call the API to log the user out.

export const requestLogout = () => {
  return (
    {
      type: LOGOUT_REQUEST,
      isFetching: true,
      isAuthenticated: true
    }
  );
};

export const receiveLogout = () => {
  return (
    {
      type: LOGOUT_SUCCESS,
      isFetching: false,
      isAuthenticated: false
    }
  );
};

//double check this function
export const LogoutFailure = () => {
  return (
    {
      type: LOGOUT_FAILURE,
      isFetching: false,
      isAuthenticated: true
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
      .catch(err => {
        console.log(err);
        dispatch(LogoutFailure());
      });
  };
};
