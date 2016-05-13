import React, { PropTypes } from 'react';
// import styles from '../styles/template.css';
import {FloatingActionButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ActionDone from 'material-ui/svg-icons/action/done';
import HardwareBack from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

const AddButton = ({onClick, icon}) => {
  if(icon === 'add' || icon === undefined) {
    return <FloatingActionButton onClick={onClick} mini={true}><ContentAdd/></FloatingActionButton>
  }
  if(icon === 'cancel') {
    return <FloatingActionButton onClick={onClick} mini={true}><ContentClear/></FloatingActionButton>
  }
  if(icon === 'save') {
    return <FloatingActionButton onClick={onClick} mini={true}><ActionDone/></FloatingActionButton>
  }
  if(icon === 'back') {
    return <FloatingActionButton onClick={onClick} mini={true}><HardwareBack/></FloatingActionButton>
  }
};

export default AddButton;
