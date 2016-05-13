import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from '../constants.js';

export default function (state = {
  isFetching: false,
}, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        success: true,
      });
    case FETCH_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
      });
    default:
      return state;
  }
}
