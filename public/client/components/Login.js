import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from '../styles/main.css';

export class Login extends Component {


  handleClick(event) {
    console.log('click');
    event.preventDefault();
    fetch('http://127.0.0.1:1337/auth', {
      method: 'GET',
      mode: 'cors',
      redirect: 'follow',
    })
    .then()
    .catch();
  }

  loginWithTwitter() {
    //Do something here
  }
  
  render() {
    const {
      logInWithTwitter
    } = this.props;

  render() {
    return (
      <div className="g-row sign-in">
        <div className="g-col">
          <h1 className="sign-in__heading">Log in</h1>
          <button className="sign-in__button" onClick={logInWithTwitter} type="button">Twitter</button>
        </div>
      </div>
    );
  }

}

export default Login;
=======
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

// export default connect(null, authActions)(SignIn);
