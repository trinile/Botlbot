import React, { PropTypes } from 'react';
// import styles from '../styles/template.css';
import {FloatingActionButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

const AddButton = ({onClick}) => (
  <FloatingActionButton onClick={onClick} mini={true}><ContentAdd/></FloatingActionButton>
);

export default AddButton;
