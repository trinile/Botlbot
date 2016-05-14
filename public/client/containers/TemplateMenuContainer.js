import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TemplateMenu from '../components/TemplateMenu';
import { navigateDown, navigateUp, navigateOut } from '../actions/templateMenu';
import { updateChunk, setChunkType } from '../actions/chunk';
import { addChunk, editChunk, deleteChunk } from '../actions/template';
import { toggleStatus } from '../actions/templateBuilder';

const mapStateToProps = (state) => ({ 
  templateMenu: state.templateMenu, 
  chunkInProgress: state.chunkInProgress, 
  templateBuilder: state.templateBuilder 
});
const mapDispatchToProps = (dispatch) => ({
  navigateDown: (key) => dispatch(navigateDown(key)),
  navigateUp: () => dispatch(navigateUp()),
  navigateOut: () => dispatch(navigateOut()),
  toggleStatus: () => dispatch(toggleStatus()),
  updateChunk: (key, value) => dispatch(updateChunk(key, value)),
  setChunkType: (chunkType) => dispatch(setChunkType(chunkType)),
  addChunk: (id, chunk) => dispatch(addChunk(id, chunk)),
  editChunk: (id, chunk) => dispatch(editChunk(id, chunk)),
  deleteChunk: (id) => dispatch(deleteChunk(id))
});

const TemplateMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateMenu);

const TemplateMenuContainerWithContext = React.createClass({
  
  childContextTypes: {
    store: PropTypes.object,
    muiTheme: PropTypes.object
  },

  getChildContext: function() {
    return {store: this.props.store, muiTheme: this.props.muiTheme};
  },

  render: function() {
    return (<TemplateMenuContainer />);
  }

});

export default TemplateMenuContainerWithContext;
