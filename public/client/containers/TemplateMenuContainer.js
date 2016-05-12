import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TemplateMenu from '../components/TemplateMenu';
import { navigateDown, navigateUp, navigateOut } from '../actions/templateMenu';

const mapStateToProps = (state) => ({ templateMenu: state.templateMenu });
const mapDispatchToProps = (dispatch) => ({
  navigateDown: (key) => dispatch(navigateDown(key)),
  navigateUp: () => dispatch(navigateUp()),
  navigateOut: () => dispatch(navigateOut())
});

const TemplateMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateMenu);

// TemplateMenuContainer.contextTypes = { context: PropTypes.object };

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

  // constructor(props) {
  //   super(props);
  //   // this.childContextTypes = {
  //   //   context: PropTypes.object

  // getChildContext() {
  //   return {context: this.props.context};
  // }

  // render() {
  //   return (<TemplateMenuContainer />);
  // }

});

export default TemplateMenuContainerWithContext;
