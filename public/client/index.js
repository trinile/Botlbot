import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import Reducers from './reducers/index.js';
import thunkMiddleware from 'redux-thunk';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const darkMuiTheme = getMuiTheme(darkBaseTheme);

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


//TODO: CONFIGURE THE MIDDLEWARE API
// import api from './middleware/api';

import Routes from './routes/routes';
// import reducers from './reducers';
// import styles from './styles/main.css';
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

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
  <MuiThemeProvider muiTheme={darkMuiTheme}>
    <Provider store={store}>
      <Router history={history} routes={Routes} />
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('root'));


  
