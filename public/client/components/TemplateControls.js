import React from 'react';
import { RaisedButton, TextField } from 'material-ui';
import styles from '../styles/template.css';

const TemplateControls = ({
  template, 
  trashTemplate, 
  saveTemplate, 
  updateName
}) => (
  <span className={styles.templatecontrols}>
    <TextField 
      hintText={'Name for your template'} 
      onChange={(e) => updateName(e.target.value)}
      value={template.name}
    />
    <br/>
    <br/>
    <RaisedButton label={'Save'} onMouseUp={() => saveTemplate(template)} />
    <br/>
    <br/>
    <RaisedButton label={'Trash'} onMouseUp={trashTemplate} />
  </span>
);

export default TemplateControls;