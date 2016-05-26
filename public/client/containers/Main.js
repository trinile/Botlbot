import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SiteNav from '../components/SiteNav';
import SnackContainer from '../containers/SnackContainer';
import { logoutUser } from '../actions/Logout';

const Main = ({ dispatch, isAuthenticated, main, sidebar }) => (
  <div>
    {sidebar}
    <div className="Main" id="2" style={{marginLeft: '266px'}}>
      <SiteNav
        isAuthenticated={isAuthenticated}
        onLogoutClick={() => dispatch(logoutUser())}
      />
      {main}
      <SnackContainer />
    </div>
  </div>
);

Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.object,
};

// These props come from the application's
// state when it is started
function mapStatetoProps(state) {
  const { authStatus } = state;
  const { isAuthenticated } = authStatus;
  return {
    isAuthenticated
  };
}

const MainContainer = connect(
  mapStatetoProps
)(Main);

export default MainContainer;
