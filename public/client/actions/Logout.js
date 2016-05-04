//logs the user out
import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../constants.js';

//three possible states for logging out.
//need three actions.
//actions are useful if we call the API to log the user out.

const requestLogout = () => {
  return (
    {
      type: LOGOUT_REQUEST,
      isFetching: true,
      isAuthenticated: true
    }
  );
};

const receiveLogout = () => {
  return (
    {
      type: LOGOUT_SUCCESS,
      isFetching: false,
      isAuthenticated: false
    }
  );
};

//double check this function

const LogoutFailure = () => {
  return (
    {
      type: LOGOUT_FAILURE,
      isFetching: false,
      isAuthenticated: true
    }
  )
}

export function logoutUser() {
    return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    dispatch(receiveLogout())
  }
}