import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import authStatus from '../auth/Auth_reducer';
import tweets from '../tweets/Tweets_reducer';
import tweetsFilter from '../tweets/Tweets_reducer_tweetsFilter';
import requestStatus from './App_reducer_requestStatus';
import template from '../template/Template_reducer';
import templateBuilder from '../template/Template_reducer_templateBuilder';
import templateMenu from '../templateMenu/TemplateMenu_reducer';
import templateIDs from '../template/Template_reducer_templateIDs';
import chunkIDCounter from '../templateChunk/TemplateChunk_reducer_counter';
import chunkInProgress from '../templateChunk/TemplateChunk_reducer_inProgress';
import snack from '../snack/Snack_reducer';
import page from '../pagination/Pagination_reducer';

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
  page,
  routing: routerReducer,
});

export default Reducers;
