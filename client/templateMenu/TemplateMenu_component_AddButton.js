import React from 'react';
// import styles from '../styles/template.css';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ActionDone from 'material-ui/svg-icons/action/done';
import HardwareBack from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import HardwareForward from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Refresh from 'material-ui/svg-icons/navigation/refresh';

const AddButton = ({onClick, icon, disabled}) => {
  if(icon === 'add' || icon === undefined) {
    return <FloatingActionButton zDepth={0} style={{transform: 'scale(0.80, 0.80)'}} onClick={onClick} backgroundColor={'#89bdd3'} mini={true} disabled={disabled}><ContentAdd/></FloatingActionButton>
  }
  if(icon === 'cancel') {
    return <FloatingActionButton zDepth={0} style={{transform: 'scale(0.80, 0.80)'}} onClick={onClick} backgroundColor={'#89bdd3'} mini={true} disabled={disabled}><ContentClear/></FloatingActionButton>
  }
  if(icon === 'delete') {
    return <FloatingActionButton zDepth={0} style={{transform: 'scale(0.80, 0.80)'}} backgroundColor={'rgba(255, 0, 0, 0.45)'} onClick={onClick} mini={true} disabled={disabled}><ContentClear/></FloatingActionButton>
  }
  if(icon === 'save') {
    return <FloatingActionButton zDepth={0} style={{transform: 'scale(0.80, 0.80)'}} onClick={onClick} backgroundColor={'#89bdd3'} mini={true} disabled={disabled}><ActionDone/></FloatingActionButton>
  }
  if(icon === 'back') {
    return <FloatingActionButton zDepth={0} style={{transform: 'scale(0.80, 0.80)'}} onClick={onClick} backgroundColor={'#89bdd3'} mini={true} disabled={disabled}><HardwareBack/></FloatingActionButton>
  }
  if(icon === 'forward') {
    return <FloatingActionButton zDepth={0} style={{transform: 'scale(0.80, 0.80)'}} onClick={onClick} backgroundColor={'#89bdd3'} mini={true} disabled={disabled}><HardwareForward/></FloatingActionButton>
  }
  if(icon === 'refresh') {
    return <FloatingActionButton zDepth={0} style={{transform: 'scale(0.80, 0.80)'}} onClick={onClick} backgroundColor={'#89bdd3'} mini={true} disabled={disabled}><Refresh/></FloatingActionButton>
  }
};

export default AddButton;
