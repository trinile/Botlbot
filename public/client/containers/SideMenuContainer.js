import React from 'react';
import { connect } from 'react-redux';
import SideMenu from '../components/SideMenu';

const mapStateToProps = (state) => ({
  templateIDs: state.templateIDs
});

const SideMenuContainer = connect(
  mapStateToProps,
  null
)(SideMenu);

export default SideMenuContainer;
