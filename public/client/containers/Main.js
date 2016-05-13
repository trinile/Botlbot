import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SiteNav from '../components/SiteNav';
import { logoutUser } from '../actions/Logout';

const style = {
  //commenting out sidebar styling for later
  // sidebar: {
  //   //click efffect is gone with position set to fixed**********
  //   // position:'fixed',
  //   minWidth: '15rem',
  //   background: 'blue',
  //   display: 'flex',
  //   'justifyContent':'flex-start',
  //   height: '100%',
  //   padding: '10px',
  // },
  // main: {
  //   position: 'relative',
  //   minWidth: '30rem',
  //   display: 'flex',
  //   'justifyContent':'flex-end',
  //   overflow: 'hidden'
  // }
}

const Main = ({ dispatch, isAuthenticated, main, sidebar }) => (
  <div>
    <SiteNav
      isAuthenticated={isAuthenticated}
      onLogoutClick={() => dispatch(logoutUser())}/>
    <div className="SideBar" id="1" /*style={style.sidebar}*/>
      {sidebar}
    </div>
    <div className="Main" id="2" /*style={style.main}*/>
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
