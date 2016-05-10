import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/routes';
import Reducers from './reducers/index.js';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
const darkMuiTheme = getMuiTheme(darkBaseTheme);

const loggerMiddleware = createLogger();
const pathMiddleware = routerMiddleware(browserHistory);

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, 
  loggerMiddleware, 
  pathMiddleware
)(createStore);

let store = createStoreWithMiddleware(
  Reducers
);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <MuiThemeProvider muiTheme={darkMuiTheme}>
    <Provider store={store}>
      <Router history={history} routes={Routes} />
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('root')
);
