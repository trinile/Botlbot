import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Tabs, Tab} from 'material-ui/Tabs';

import FlatButton from 'material-ui/FlatButton';


const style = {
  menuItem: {
    // width: '100%',
    // border: '1px black',

  },
  menu: {
    margin: '16px 32px 16px 0',
    // padding: '10px',
    // width: '100%',
  },
};
const SideMenu = () => (
    <Paper style={style.menu}>
      <Menu style={style.menu}>
        <MenuItem primaryText="Dashboard" />
        <MenuItem primaryText="Build a Bot" />
        <MenuItem primaryText="Bot Templates" />
        <MenuItem primaryText="Posted Tweets" />
        <MenuItem primaryText="Recently Trashed" />
        <Divider/>
        <MenuItem primaryText="Logout" />

      </Menu>
    </Paper>
);


export default SideMenu;
