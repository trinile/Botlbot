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
    isAuthenticated: true
  }
);

export const loginError = (message) => {
  return (
    {
      type: LOGIN_FAILURE,
      isFetching: false,
      isAuthenticated: false,
      message
    }
  );
};

// loginUser not being used currently 
// redirecting user to link instead of calling fetch.
// export function loginUser() {
//   console.log('logging in users ===============>');
//    return dispatch => {
//     let config = {
//       method: 'GET',
//       credentials: 'same-origin'
//     };
//     dispatch(requestLogin());
//     return fetch('/auth', config)
//       .then(response => {
//         console.log(response);
//         dispatch(receiveLogin());
//       })
//       .catch(err => {
//         console.log('error in loggin in -----> ', err);
//         dispatch(loginError(err));
//       });
//   }
// };
