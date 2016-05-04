import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

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
  <Router history={history} routes={Routes} />,
  document.getElementById('root')
);
