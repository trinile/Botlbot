import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TemplateControls from '../components/TemplateControls';
import { 
  postTemplateAsync, 
  editTemplateAsync, 
  deleteTemplateAsync,
  getTemplateNamesAsync, 
  trashTemplate,
  updateName } from '../actions/template';

const mapStateToProps = (state) => ({
  template: state.template
});

const mapDispatchToProps = (dispatch) => ({
  saveTemplate: (template) => dispatch(postTemplateAsync(template)),
  updateTemplate: (template) => dispatch(editTemplateAsync(template)),
  deleteTemplate: (template) => dispatch(deleteTemplateAsync(template)),
  getTemplateNames: () => dispatch(getTemplateNamesAsync()),
  trashTemplate: () => dispatch(trashTemplate()),
  updateName: (name) => dispatch(updateName(name))
});

const TemplateControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateControls);

export default TemplateControlsContainer;
