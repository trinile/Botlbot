import React from 'react';
import { RaisedButton, TextField } from 'material-ui';
import styles from '../styles/template.css';

const TemplateControls = ({
  template, 
  trashTemplate, 
  saveTemplate, 
  updateTemplate,
  deleteTemplate,
  getTemplateNames,
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
    <RaisedButton 
      label={'Save'} 
      disabled={template.length === 0 || template.name === undefined || template.name === ''} 
      onMouseUp={() => {
        saveTemplate(template)
          .then(res => getTemplateNames());
      }} 
    />
    <br/>
    <br/>
    <RaisedButton label={'Trash'} disabled={template.length === 0} onMouseUp={trashTemplate} />
  </span>
);

export default TemplateControls;