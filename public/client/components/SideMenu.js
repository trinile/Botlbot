import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
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
  <Drawer docked={true} style={style.drawer}>
    <List>
      <ListItem primaryText="Dashboard" containerElement={<Link to="/dashboard" />}/>
      <ListItem primaryText="Build a Bot" containerElement={<Link to="/build"/>} />
      <ListItem 
        primaryText="Edit Templates" 
        containerElement={<Link to="/edit" />}
        primaryTogglesNestedList={true}
        nestedItems={[
          <ListItem primaryText='Default' />
        ]}
      />
      <ListItem primaryText="Posted Tweets" containerElement={<Link to="/postedtweets" />}/>
      <ListItem primaryText="Scheduled Tweets" containerElement={<Link to="/scheduled/:id "/>}/>
      <ListItem primaryText="Recently Trashed" containerElement={<Link to="/recentlytrashed" />}/>
      <Divider/>
      <ListItem primaryText="Logout" />
    </List>
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
