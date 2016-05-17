import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import authStatus from './Auth';
import tweets from './tweets';
import tweetsFilter from './tweetsFilter';
import requestStatus from './requestStatus';
import template from './template';
import templateBuilder from './templateBuilder';
import templateMenu from './templateMenu';
import chunkIDCounter from './chunkIDCounter';
import chunkInProgress from './chunkInProgress';

const Reducers = combineReducers({
  authStatus,
  tweets,
  tweetsFilter,
  requestStatus,
  template,
  templateBuilder,
  templateMenu,
  chunkIDCounter,
  chunkInProgress,
  routing: routerReducer,
});

export default Reducers;
