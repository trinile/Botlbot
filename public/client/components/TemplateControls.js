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
        if(template.id !== undefined) {
          updateTemplate(template)
          .then(res => getTemplateNames());
        } else {
          saveTemplate(template)
            .then(res => getTemplateNames());
        }
      }} 
    />
    <br/>
    <br/>
    <RaisedButton 
      label={'Clear'} 
      disabled={template.length === 0} 
      onMouseUp={trashTemplate} 
    />
    {
      template.id !== undefined &&
        (
          <span>
          <br />
          <br />
          <RaisedButton 
            label={'Delete'} 
            disabled={template.length === 0} 
            onMouseUp={() => {
              deleteTemplate(template.id)
                .then(res => getTemplateNames());
            }}
          />
          </span>
        )
    }
  </span>
);

export default TemplateControls;