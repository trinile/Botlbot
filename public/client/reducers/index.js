import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import LoginReducer  from './Login.js';
import LogoutReducer from './Logout.js';

const Reducers = combineReducers({
  LoginReducer,
  LogoutReducer,
  routing: routerReducer
});

console.log('Reducers ', Reducers.LoginReducer);
export default Reducers;