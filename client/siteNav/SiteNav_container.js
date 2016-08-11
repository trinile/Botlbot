import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import SiteNav from './SiteNav_component';
import { openSideMenu, closeSideMenu } from './SiteNav_actions';


const mapStateToProps = (state) => ({
  sideMenu: state.sideMenu.open,
});

const mapDispatchToState = (dispatch) => ({
});

const SiteNavContainer = connect(
  mapStateToProps,
  mapDispatchToState,
)(SiteNav);

export default SiteNavContainer;
