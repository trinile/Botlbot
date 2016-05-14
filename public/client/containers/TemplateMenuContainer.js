import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TemplateMenu from '../components/TemplateMenu';
import { navigateDown, navigateUp, navigateOut } from '../actions/templateMenu';
import { updateChunk, setChunkType } from '../actions/chunk';
import { addChunk, editChunk, deleteChunk } from '../actions/template';
import { toggleStatus, toggleSelecting } from '../actions/templateBuilder';
import { incrementCounter } from '../actions/chunkIDCounter';

const mapStateToProps = (state) => ({ 
  templateMenu: state.templateMenu, 
  chunkInProgress: state.chunkInProgress,
  chunkIDCounter: state.chunkIDCounter, 
  templateBuilder: state.templateBuilder 
});
const mapDispatchToProps = (dispatch) => ({
  navigateDown: (key) => dispatch(navigateDown(key)),
  navigateUp: () => dispatch(navigateUp()),
  navigateOut: () => dispatch(navigateOut()),
  toggleStatus: () => dispatch(toggleStatus()),
  toggleSelecting: () => dispatch(toggleSelecting()),
  updateChunk: (key, value) => dispatch(updateChunk(key, value)),
  setChunkType: (chunkType) => dispatch(setChunkType(chunkType)),
  addChunk: (index, chunk, id) => dispatch(addChunk(index, chunk, id)),
  editChunk: (index, chunk) => dispatch(editChunk(index, chunk)),
  deleteChunk: (index) => dispatch(deleteChunk(index)),
  incrementCounter: () => dispatch(incrementCounter())
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
