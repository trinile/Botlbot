import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/routes';
import Reducers from './reducers/index.js';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import {lightBlue500, lightBlue700, grey800, blueGrey50 ,purple100, fullBlack } from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
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

 //placeholder for when we want to change the custom styling of mui theme 
const muiTheme = getMuiTheme({
  palette: {
    // primary1Color: lightBlue500,
    // primary2Color: lightBlue700,
    // primary3Color: lightBlue700,
    // accent1Color: purple100,
    // canvasColor: blueGrey50,
    // // disabledColor: fade(darkBlack, 0.3),
    // pickerHeaderColor: lightBlue500,
    // // clockCircleColor: fade(darkBlack, 0.07),
    // shadowColor: fullBlack
  },
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
