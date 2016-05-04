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

  render() {
    return (
      <div>
        <h1 className={styles.login}>Welcome! Login to Twitter!</h1>
        <button onClick={(event) => this.handleClick(event)} className={styles.button}>
          Here
        </button>
        </div>
    );
  }

}

export default Login;
