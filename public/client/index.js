import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import Reducers from './reducers/index.js';
import thunkMiddleware from 'redux-thunk';
//TODO: CONFIGURE THE MIDDLEWARE API
// import api from './middleware/api';

import Routes from './routes/routes';
// import reducers from './reducers';
// import styles from './styles/main.css';


const store = createStore(
  combineReducers({
    // ...reducers,
    routing: routerReducer,
  })
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory} routes={Routes} />
  </Provider>
  , document.getElementById('root'));
