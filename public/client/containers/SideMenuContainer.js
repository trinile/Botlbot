import React from 'react';
import { connect } from 'react-redux';
import SideMenu from '../components/SideMenu';
import { logoutUser } from '../actions/Logout';

const mapStateToProps = (state) => ({
  templateIDs: state.templateIDs
});

const mapDispatchToState = (dispatch) => ({
  onLogoutClick: () => {dispatch(logoutUser())
  },
})

const SideMenuContainer = connect(
  mapStateToProps,
  mapDispatchToState,
)(SideMenu);

export default SideMenuContainer;
