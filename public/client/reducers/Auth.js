/* reducers specify how the application state changes in response to action
*/
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from '../constants.js';

// initial state is user not authenticated & id is set to null
// The starting state sets authentication based on a token being in local storage
// in real app, would want to use a util to check if token is expired

export default function authStatus(state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('authID') ? true: false
  }, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
      });
    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
      });
    default:
      return state;
  }
};
