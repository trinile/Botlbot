import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './app/App_routes';
import Reducers from './app/App_reducers.js';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

/* 
import pureCSS js for behavior of side menu
*/
import './app/pureCSS/ui.js';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

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

const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
  },
});

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Routes history={history}/>
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('root')
);
