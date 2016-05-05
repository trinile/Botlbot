import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import styles from '../styles/main.css';
import Login from '../components/Login';
import Logout from '../components/Logout';
import { loginUser } from '../actions/Login';
import { logoutUser } from '../actions/Logout';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class Main extends Component {
  render() {
    const { dispatch, isAuthenticated } = this.props;
      return (
        <div>
        This is Main Page for Root
        { !isAuthenticated && <Login
           onLoginClick={ () => dispatch(loginUser()) }
         />
        }
        { isAuthenticated &&
          <Logout onLogoutClick={() => dispatch(logoutUser())} />
        }
        </div>

      ); 
  }
};

Main.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

// These props come from the application's
// state when it is started
function mapStatetoProps(state) {
  console.log('state ', state);
  const { AuthReducer } = state;
  const { isAuthenticated } = AuthReducer;

  return {
    isAuthenticated
  };
};


export default connect(mapStatetoProps)(Main);


