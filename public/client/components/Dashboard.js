import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from '../styles/main.css';

class Dashboard extends Component {

  loginWithTwitter() {
    alert('Hello');
  }

  render() {
}

export default Dashboard;
// Login.propTypes = {
//   onLoginClick: PropTypes.func.isRequired,
//   errorMessage: PropTypes.string
// };

// export default connect(null, authActions)(SignIn);