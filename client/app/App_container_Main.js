import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SiteNav from '../siteNav/SiteNav_component';
import SnackContainer from '../snack/Snack_container';
import { logoutUser } from '../auth/Auth_actions_logout';
import AppBar from 'material-ui/AppBar';
// sideMenu styling from pureCSS
import Pure from 'purecss/build/pure-min.css';
import SideMenu from './pureCSS/sideMenu.css';

const style = {
  menuIcon: {
    width: '200px',
    backgroundColor:'#89bdd3',
    height: '55px',
  },
};
const Main = ({ dispatch, isAuthenticated, main, sidebar }) => {
  return (
    <div id={`${SideMenu["layout"]}`}>
      <a href={`#${SideMenu["menu"]}`} id={`${SideMenu["menuLink"]}`} className={`${SideMenu["menu-link"]}`}>
        <AppBar
          zDepth={0}
          title="Botlbot"
          style={style.menuIcon}
        />
      </a>
      {sidebar}
      <div className={['main']}>
        <SiteNav
          className={[`${Pure['pure-menu']} ${Pure['pure-menu-horizonal']}`]}
          isAuthenticated={isAuthenticated}
          onLogoutClick={() => dispatch(logoutUser())}
        />
        {main}
        <SnackContainer />
      </div>
    </div>
  );
};

Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.object,
};

// These props come from the application's
// state when it is started
function mapStatetoProps(state) {
  return {
    isAuthenticated: state.authStatus.isAuthenticated,
  };
}

const MainContainer = connect(
  mapStatetoProps
)(Main);

export default MainContainer;
