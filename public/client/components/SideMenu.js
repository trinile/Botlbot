import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';

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
  drawer: {
    top: '100px'
  }
};

const SideMenu = () => (
  <Drawer open={true} style={style.drawer}>
  <MenuItem primaryText="Dashboard" containerElement={<Link to="/dashboard" />}/>
  <MenuItem primaryText="Build a Bot" containerElement={<Link to="/build"/>}>
    <MenuItem primaryText="Bot Templates" containerElement={<Link to="/template" />}/>
  </MenuItem>
  <MenuItem primaryText="Posted Tweets" containerElement={<Link to="/postedtweets" />}/>
  <MenuItem primaryText="Scheduled Tweets" containerElement={<Link to="/scheduled/:id "/>}/>
  <MenuItem primaryText="Recently Trashed" containerElement={<Link to="/recentlytrashed" />}/>
  <Divider/>
  <MenuItem primaryText="Logout" />
  </Drawer>
);
// const SideMenu = () => (
//     <Paper style={style.menu}>
//       <Menu style={style.menu}>
//         <MenuItem primaryText="Dashboard" containerElement={<Link to="/dashboard" />}/>
//         <MenuItem primaryText="Build a Bot" containerElement={<Link to="/build" />}/>
//         <MenuItem primaryText="Bot Templates" containerElement={<Link to="/template" />}/>
//         <MenuItem primaryText="Posted Tweets" containerElement={<Link to="/postedtweets" />}/>
//         <MenuItem primaryText="Recently Trashed" containerElement={<Link to="/recentlytrashed" />}/>
//         <Divider/>
//         <MenuItem primaryText="Logout" />

//       </Menu>
//     </Paper>
// );


export default SideMenu;
