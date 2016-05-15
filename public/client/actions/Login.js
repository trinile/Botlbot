import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants.js';
import fetch from 'isomorphic-fetch';


/**
* Action-creators to handle Login Flow
* Three possible states for Login process
* 1. Login-Request: call to API to request authentication
* 2. Login_SUCCESS: call to API complete, login successful
* 3. Login_Error: call to API complete, but login failure
*
*/
/**
* @namespace Action-Creator
*/
// ACTIONS are objects, payloads of information that send data
// from your application to the store (THEY ARE THE ONLY SOURCE OF INFO FOR THE STORE);
// SEND ACTIONS TO STORE via store.dispatch

/**
* Action creator that represents initial login request state of user
* @Function LOGIN_REQUEST Action Creator
* @returns { object } action object
* @property { string } type - LOGIN_REQUEST
* @property { Boolean } isAuthenticated - false
* @property { string } isFetching - true
*/
export const requestLogin = () => (
  {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
  }
);
/**
*Represents user login and authentication successful
* @Action-creator
* @Function LOGIN_SUCCESS Action Creator
* @returns { object } action object
* @property {string } type - LOGIN_SUCCESS
* @propery { Boolean } isAuthenticated - true
* @property { string } isFetching - false
*/
export const receiveLogin = () => (
  {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
  }
);
/**
* Represents Error in login Request
* @Action-creator
* @Function LOGIN_FAILURE Action Creator
* @param {object} message - error message response from server.
* @returns { object } action object
* @property { string } type - LOGIN_FAILURE
* @property { Boolean } isAuthenticated - false
* @property { string } isFetching - true
*/ 
export const loginError = (message) => (
  {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  }
);

/**
*Asynchronous function that returns function that takes in dispatch prop
* dispatches actions for all stages of Login (request, sucess, failure)
* @Async-Action-Creator
* @Function authUser ASYNC Action Creator
* @ returns { function }
*/
export const authUser = () => {
  return dispatch => {
    dispatch(requestLogin());
    return fetch('http://127.0.0.1:1337/authUser', { method: 'GET', credentials: 'same-origin' })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('authID', json.authID);
        // if (!json.ok) {
          // dispatch(loginError(err));
        // }
        dispatch(receiveLogin());
      })
      .catch(err => dispatch(loginError(err)));
  };
};
