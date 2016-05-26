import React from 'react';
import { RaisedButton, TextField } from 'material-ui';
import styles from '../styles/template.css';

const TemplateControls = ({
  template, 
  trashTemplate, 
  saveTemplate, 
  updateTemplate,
  deleteTemplate,
  // getTemplateNames,
  updateName,
  setSnackMessage,
  redirectToDashboard
}) => (
  <span className={styles.templatecontrols}>
    <TextField
      hintText={'Name for your template'} 
      onChange={(e) => updateName(e.target.value)}
      value={template.name}
    />
    <br />
    <br />
    <RaisedButton 
      label={'Save'} 
      disabled={template.length === 0 || template.name === undefined || template.name === ''} 
      onMouseUp={() => {
        if(template.id !== undefined) {
          console.log('UPDATING, SHOULD SHOW SNACK');
          setSnackMessage(`Updating template '${template.name}'...`);
          updateTemplate(template)
          // .then(res => getTemplateNames())
          .then(() => setSnackMessage(`Updated template '${template.name}'!`))
          .then(() => redirectToDashboard())
          .catch((err) => setSnackMessage('Couldn\'t update template...'));
        } else {
          console.log('SAVING, SHOULD SHOW SNACK');
          setSnackMessage(`Saving template '${template.name}'...`);
          saveTemplate(template)
            // .then(res => getTemplateNames());
            .then(() => setSnackMessage(`Saved template '${template.name}'!`))
            .then(() => {
              trashTemplate();
              redirectToDashboard();
            })
            .catch((err) => setSnackMessage('Couldn\'t save template...'));
        }
      }} 
    />
    <br/>
    <br/>
    <RaisedButton 
      label={'Clear'} 
      disabled={template.length === 0} 
      onMouseUp={() => {
        console.log('TEMPLATE ID IS', template.id);
        trashTemplate(template.id);
      }}
    />
    {
      template.id !== undefined &&
        (
          <span>
          <br />
          <br />
          <RaisedButton 
            label={'Delete'}  
            onMouseUp={() => {
              console.log('DELETING, SHOULD SHOW SNACK');
              setSnackMessage(`Deleting template '${template.name}'...`);
              deleteTemplate(template.id)
                // .then(res => getTemplateNames())
                .then(() => setSnackMessage(`Deleted template '${template.name}!'`))
                .then(() => redirectToDashboard())
                .catch((err) => setSnackMessage('Couldn\'t delete template...'));
            }}
          />
          </span>
        )
    }
  </span>
);

export default TemplateControls;
