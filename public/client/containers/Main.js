import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SiteNav from '../components/SiteNav';

function testLogout() {
  fetch('/logout', { method: 'GET', credentials: 'same-origin' })
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

const Main = ({ isAuthenticated, children }) => (
  <div>
    <SiteNav isAuthenticated={isAuthenticated} />
    {children}
  </div>
);

Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.object,
};

// These props come from the application's
// state when it is started
function mapStatetoProps(state) {
  return {
    isAuthenticated: state.authStatus,
  };
}

export default connect(mapStatetoProps)(Main);
