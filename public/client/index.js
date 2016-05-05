import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';
import Reducers from './reducers/index.js';
import thunkMiddleware from 'redux-thunk';
//TODO: CONFIGURE THE MIDDLEWARE API
// import api from './middleware/api';
import {receiveLogin} from './actions';

import Routes from './routes/routes';
// import reducers from './reducers';
// import styles from './styles/main.css';
let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

let store = createStoreWithMiddleware(
  Reducers
);

console.log('Reducers', Reducers);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

console.log('store ', store);

// LOGOUT_SUCESS /// 

console.log('state ', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>
  , document.getElementById('root'));
