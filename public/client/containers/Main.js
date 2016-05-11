import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SiteNav from '../components/SiteNav';
import { logoutUser } from '../actions/Logout';

const style = {
  sidebar: {
    position:'fixed',
    width: '30%',
    float:'left',
    height: '100%'
  },
  main: {
    position:
  }
}

const Main = ({ dispatch, isAuthenticated, main, sidebar }) => (
  <div styles>
    <SiteNav
      styles={style}
      isAuthenticated={isAuthenticated}
      onLogoutClick={() => dispatch(logoutUser())}/>
    <div className="Sidebar">
      {sidebar}
    </div>
    <div className="Main">
      {main}
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
