import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import LoginReducer  from './Login.js';
import LogoutReducer from './Logout.js';

const Reducers = combineReducers({
  login: LoginReducer,
  logout: LogoutReducer,
  routing: routerReducer
});

export default Reducers;