import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Snack from '../components/Snack';
import { setSnackMessage, closeSnack } from '../actions/snack';

const mapStateToProps = (state) => ({
  snack: state.snack
});
const mapDispatchToProps = (dispatch) => ({
  closeSnack: () => dispatch(closeSnack())
});

const SnackContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Snack);

export default SnackContainer;