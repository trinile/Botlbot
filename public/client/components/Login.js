import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from '../styles/main.css';

class Login extends Component {


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
    alert('Hello');
    //Do something here
    // var init = {
    //   method: 'GET',
    //   headers: new Headers(),
    //   mode: 'cors',
    //   cache: 'default'
    // };

    // fetch('127.0.0.1:1337/auth', init)
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(res) {

    // })
  }

  render() {
    const {
      logInWithTwitter
    } = this.props;

  render() {
    return (
      <div>
          <h1>Log in</h1>
          <button className={styles.button} onClick={logInWithTwitter}>Twitter</button>
      </div>
    );
  }

}

export default Login;
=======
}

export default Login;
// Login.propTypes = {
//   onLoginClick: PropTypes.func.isRequired,
//   errorMessage: PropTypes.string
// };

// export default connect(null, authActions)(SignIn);
