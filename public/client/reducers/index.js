import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import authStatus from './Auth.js';
import tweets from './tweets';

const Reducers = combineReducers({
  authStatus,
  tweets,
  routing: routerReducer,
});

// { LoginReducer: { LoginReducer: ..... , LogoutReducer, Routing::; }
// console.log('Reducers ', Reducers.LoginReducer);
export default Reducers;
