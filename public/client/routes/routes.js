import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Login from '../components/Login';

export default const Routes = ({history}) => {
  return (
    <Router history={history}>
      <Route path="/" component={Login}>
      </Route>
    </Router>
  );
};


