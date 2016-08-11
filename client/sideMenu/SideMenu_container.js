import React from 'react';
import { connect } from 'react-redux';
import SideMenu from './SideMenu_component';
import { logoutUser } from '../auth/Auth_actions_logout';
  
const mapStateToProps = (state) => ({
  templateIDs: state.templateIDs,
});

const mapDispatchToState = (dispatch) => ({
  onLogoutClick: () => dispatch(logoutUser()),
})

const SideMenuContainer = connect(
  mapStateToProps,
  mapDispatchToState,
)(SideMenu);

export default SideMenuContainer;
