import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Logo from './Logo';

const style = {
  menu: {
    margin: '16px 32px 16px 0',
  },
  drawer: {
    top: '100px',
    zIndex: '1'
  }
};

const SideMenu = ({ templateIDs, onLogoutClick }) => (
  <Drawer docked={true} style={style.drawer} zDepth={0} >
    <List>
      <ListItem disabled={true}>
        <Logo />
      </ListItem>
      <ListItem primaryText="Dashboard" containerElement={<Link to="/dashboard" />}/>
      <ListItem primaryText="Build a Bot" containerElement={<Link to="/build"/>} />
      <ListItem 
        primaryText="Edit Templates" 
        primaryTogglesNestedList={true}
        disabled={templateIDs.length === 0}
        style={templateIDs.length === 0 ? {color: 'lightgray'} : {}}
        nestedItems={ templateIDs.map((t, index) => {
          return (
            <ListItem 
              primaryText={t.name} 
              containerElement={<Link to={`/edit/${templateIDs[index].template_id}`} />}
            />
          );
        })}
      />
      <ListItem primaryText="Posted Tweets" containerElement={<Link to="/posted" />}/>
      <ListItem primaryText="Scheduled Tweets" containerElement={<Link to="/scheduled"/>}/>
      <Divider/>
      <ListItem primaryText="Logout" onTouchTap={onLogoutClick}/>
    </List>
  </Drawer>
);

export default SideMenu;
