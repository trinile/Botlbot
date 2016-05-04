import {
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../constants.js';
import { initialState } from './Login.js';


export function LogoutReducer(state = { initialState }, action) {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    default: 
      return state
  }
};

