import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SiteNav from '../component/SiteNav';
import styles from '../styles/main.css';

const Main = ({ isAuthenticated, children }) => (
  <div>
    <SiteNav
      isAuthenticated={isAuthenticated}
      style={styles.sitenav}
    />
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
  const { isAuthenticated } = state.AuthReducer;

  return {
    isAuthenticated,
  };
}

export default connect(mapStatetoProps)(Main);
