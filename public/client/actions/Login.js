import {
  INIT_AUTH,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants.js';

//three possible states for login process
//three actions for each of those states
//ACTIONS are objects, payloads of information that send data 
//from your application to the store (THEY ARE THE ONLY SOURCE OF INFO FOR THE STORE);
//SEND ACTIONS TO STORE via store.dispatch

export const requestLogin = () => {
  return (
    {
      type: INIT_AUTH,
      isFetching: true,
      isAuthenticated: false
    }
  );
}

//Following are action creaters
//return actions in object format { }
const receiveLogin = (user) => {
  return (
    {
      type: LOGIN_SUCCESS,
      isFetching: false,
      isAuthenticated: true,
      id_token: user.id_token 
    }
  );
}

const loginError = (message) => {
  return (
    {
      type: LOGIN_FAILURE,
      isFetching: false,
      isAuthenticated: false,
      message
    }
  );
}

//authenticate
//bound action creater 
//CALL THE API TO GET A TOKEN AND DISPATCH ACTIONS ALONG THE WAY

export const loginUser = () => {

   return dispatch => {
    // dispatch requestLogin to kickoff the call to the API
    let config = {
      method: 'GET'
    };
    dispatch(requestLogin());
    return fetch('http://localhost/auth', config)
      .then(response =>
        response.json()
        .then(user => ({ user, response }))
      ).then(({ user, response }) =>  {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(user.message))
          return Promise.reject(user)
        }
        else {
          // If login was successful, set the token in local storage
          localStorage.setItem('id_token', user.id_token)
          
          // Dispatch the success action
          dispatch(receiveLogin(user))
        }
      }).catch(err => console.log("Error: ", err))
  }
};
