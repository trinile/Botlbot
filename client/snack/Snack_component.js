import React, { PropTypes } from 'react';
import { Snackbar } from 'material-ui';

const Snack = ({ snack, closeSnack }) => (
  <Snackbar 
    open={snack.open}
    message={snack.message}
    autoHideDuration={5000}
    onRequestClose={closeSnack}
    style={{fontFamily: 'Roboto, sans-serif'}}
  />
);

Snack.PropTypes = {
  snack: PropTypes.object,
  closeSnack: PropTypes.func,
};

export default Snack;
