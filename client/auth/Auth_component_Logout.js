import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Logout = ({ onLogoutClick }) => (

  <div>
    <RaisedButton
      onClick={onLogoutClick}
      label="LOGOUT"
      linkButton={true}
    />
  </div>
);

Logout.propTypes = {
  onLogoutClick: PropTypes.func,
};

export default Logout;
