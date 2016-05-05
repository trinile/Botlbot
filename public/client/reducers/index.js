import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import AuthReducer  from './Auth.js';

const Reducers = combineReducers({
  AuthReducer,
  routing: routerReducer,
});

// { LoginReducer: { LoginReducer: ..... , LogoutReducer, Routing::; }
console.log('Reducers ', Reducers.LoginReducer);
export default Reducers;