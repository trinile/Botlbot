// import React from 'react';
import { connect } from 'react-redux';
import Snack from './Snack_component';
import { closeSnack } from './Snack_actions';

const mapStateToProps = (state) => ({
  snack: state.snack,
});
const mapDispatchToProps = (dispatch) => ({
  closeSnack: () => dispatch(closeSnack()),
});

const SnackContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Snack);

export default SnackContainer;
