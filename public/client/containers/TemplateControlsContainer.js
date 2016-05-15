import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TemplateControls from '../components/TemplateControls';
import { saveTemplate, trashTemplate, updateName } from '../actions/template';

const mapStateToProps = (state) => ({
  template: state.template
});

const mapDispatchToProps = (dispatch) => ({
  saveTemplate: () => dispatch(saveTemplate()),
  trashTemplate: () => dispatch(trashTemplate()),
  updateName: (name) => dispatch(updateName(name))
});

const TemplateControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateControls);

export default TemplateControlsContainer;
