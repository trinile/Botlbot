import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import authStatus from './Auth';
import tweets from './tweets';
import tweetsFilter from './tweetsFilter';
import requestStatus from './requestStatus';

const Reducers = combineReducers({
  authStatus,
  tweets,
  tweetsFilter,
  requestStatus,
  routing: routerReducer,
});

export default Reducers;
