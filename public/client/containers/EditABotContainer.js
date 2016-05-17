import React from 'react';
import { connect } from 'react-redux';
import EditABot from '../components/EditABot';
import { getTemplateAsync } from '../actions/template';
import { loadHighestId } from '../actions/chunkIDCounter';

const mapStateToProps = (state) => ({
  template: state.template
});
const mapDispatchToProps = (dispatch) => ({
  getTemplate: (id) => dispatch(getTemplateAsync(id)),
  loadHighestId: (template) => dispatch(loadHighestId(template))
});

const EditABotContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditABot);

export default EditABotContainer;
