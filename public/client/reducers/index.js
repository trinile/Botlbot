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
import templateIDs from './templateIDs';
import chunkIDCounter from './chunkIDCounter';
import chunkInProgress from './chunkInProgress';
import snack from './snack';

const Reducers = combineReducers({
  authStatus,
  tweets,
  tweetsFilter,
  requestStatus,
  template,
  templateBuilder,
  templateMenu,
  templateIDs,
  chunkIDCounter,
  chunkInProgress,
  snack,
  routing: routerReducer,
});

export default Reducers;
