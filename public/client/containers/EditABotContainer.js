import React from 'react';
import { connect } from 'react-redux';
import EditABot from '../components/EditABot';
import { getTemplateAsync, trashTemplate } from '../actions/template';
import { loadHighestId } from '../actions/chunkIDCounter';

const mapStateToProps = (state) => ({
  template: state.template
});
const mapDispatchToProps = (dispatch) => ({
  getTemplate: (id) => dispatch(getTemplateAsync(id)),
  loadHighestId: (template) => dispatch(loadHighestId(template)),
  trashTemplate: () => dispatch(trashTemplate())
});

const EditABotContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditABot);

export default EditABotContainer;
