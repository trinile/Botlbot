import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants.js';

// three possible states for login process
// three actions for each of those states
// ACTIONS are objects, payloads of information that send data
// from your application to the store (THEY ARE THE ONLY SOURCE OF INFO FOR THE STORE);
// SEND ACTIONS TO STORE via store.dispatch

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

// LOGIN ACTION CREATOR
export const authUser = () => {
  return dispatch => {
    dispatch(requestLogin());
    return fetch('/authUser', { method: 'GET', credentials: 'same-origin'})
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('authID', json.authID);
        dispatch(receiveLogin());
      })
      .catch(err => dispatch(loginError(err)));
  };
};
