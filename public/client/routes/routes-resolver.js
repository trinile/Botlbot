import {
  POST_SIGN_IN_PATH,
  SIGN_IN_PATH
} from '../constants.js';
//POST_LOGIN_PATH = '/', SIGN_IN_PATH = '/login'

export function authRouteResolver(getState) {
  return (nextState, replace) => {
    const { auth } = getState();
    const { pathname } = nextState.location;

    if (!auth.authenticated && `/${pathname}` !== SIGN_IN_PATH) {
      replace({pathname: SIGN_IN_PATH});
    }
    else if (auth.authenticated && `/${pathname}` !== POST_SIGN_IN_PATH) {
      replace({pathname: POST_SIGN_IN_PATH});
    }
  };
}

