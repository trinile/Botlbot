/* reducers specify how the application state changes in response to action
*/
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../constants.js';

// initial state is user not authenticated & id is set to null
// The starting state sets authentication based on a token being in local storage
// in real app, would want to use a util to check if token is expired

export default function authStatus(state = false, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return true;
    case LOGOUT_SUCCESS:
      return false;
    default:
      return state;
  }
}
