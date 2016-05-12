import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Source from '../components/Source';
import { addSource } from '../actions/source';


const mapStateToProps = (state) => ({ template: state.template });
const mapDispatchToProps = (dispatch) => ({
  addSource: (e, child) => {
    dispatch(addSource(child.props.value));
  }
});

const SourceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Source);

// SourceContainer.contextTypes = { context: PropTypes.object };

const SourceContainerWithContext = React.createClass({
  
  childContextTypes: {
    store: PropTypes.object,
    muiTheme: PropTypes.object
  },

  getChildContext: function() {
    return {store: this.props.store, muiTheme: this.props.muiTheme};
  },

  render: function() {
    return (<Source />);
  }

  // constructor(props) {
  //   super(props);
  //   // this.childContextTypes = {
  //   //   context: PropTypes.object

  // getChildContext() {
  //   return {context: this.props.context};
  // }

  // render() {
  //   return (<SourceContainer />);
  // }

});

export default SourceContainerWithContext;
