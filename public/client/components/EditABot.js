import React, { PropTypes, Component } from 'react';
import TemplateContainer from '../containers/TemplateContainer';
import TemplateControlsContainer from '../containers/TemplateControlsContainer';
import styles from '../styles/template.css';

class EditABot extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getTemplate(this.props.params.id);
  }

  componentWillReceiveProps(newprops) {
    console.log('TEMPLATE ID IS', newprops.params.id);
    console.log('store IS', this.context.store);
    this.props.params.id !== newprops.params.id && this.props.getTemplate(newprops.params.id);
  }

  componentDidUpdate() {
    this.props.loadHighestId(this.props.template);
  }

  componentWillUnmount() {
    console.log('DISMOUNTING');
    this.props.trashTemplate();
  }

  render() {
    return (
      <main>
        <h1 className={styles.title}>Edit an existing bot!</h1>
        <div className={styles.container}>
          <TemplateContainer />
          <TemplateControlsContainer />
        </div>
      </main>
    )
  }
};

EditABot.contextTypes = {
  store: PropTypes.object,
  muiTheme: PropTypes.object
}

export default EditABot;
