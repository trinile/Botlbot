import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import AuthReducer from './Auth.js';
import tweets from './tweets';

const Reducers = combineReducers({
  AuthReducer,
  tweets,
  routing: routerReducer,
});

// { LoginReducer: { LoginReducer: ..... , LogoutReducer, Routing::; }
// console.log('Reducers ', Reducers.LoginReducer);
export default Reducers;
