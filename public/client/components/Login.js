import React, { Component, PropTypes } from 'react';

// import { connect } from 'react-redux';
import styles from '../styles/main.css';
// import RaisedButton from 'material-ui/RaisedButton';
class Login extends Component {


  handleClick(event) {
    console.log('click');
    event.preventDefault();
    this.props.onLoginClick();
  }

  render() {

    return (
      <div>
        <div className={styles.login}>
        <form action="http://127.0.0.1:1337/auth">
        <input type="submit" className={styles.button} value="Login to Twitter" />
        </form>
        </div>
      </div>
    );
  }

}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired
};

export default Login;
