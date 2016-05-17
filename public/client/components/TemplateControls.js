import React from 'react';
import { RaisedButton, TextField } from 'material-ui';

const TemplateControls = ({
  template, 
  trashTemplate, 
  saveTemplate, 
  updateName
}) => (
  <div>
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
  </div>
);

export default TemplateControls;