
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';

// import App from './components/App';
// import Login from './components/Login';
import Routes from './routes/routes';
import styles from './styles/main.css';

ReactDOM.render(<Router history={browserHistory} routes={Routes} />
  , document.getElementById('root'));
