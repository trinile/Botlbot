import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router';
import Logo from '../logo/Logo_component';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import Pure from 'purecss/build/pure-min.css';
import Side from '../app/pureCSS/sideMenu.css';

const style = {
  drawer: {
    zIndex: '1',
    paddingTop: '0px',
  },
  appBar: {
    backgroundColor: '#89bdd3',
    paddingTop: '0px',
    height: '55.5px',
    textAlign: 'center',
    color: 'black',
  },
};

const SideMenu = ({ templateIDs, onLogoutClick }) => {
  const userInfo = () => {
    const info = localStorage.getItem('userInfo');
    return JSON.parse(info).username;
  }
  return (
    <Paper 
      id={`${Side["menu"]}`}
      zDepth={3}
      style={{padding: ''}}
    >
      <AppBar 
        title={userInfo()} 
        showMenuIconButton={false}
        style={style.appBar}
        titleStyle={{fontSize:'18px'}}
      />
      <Menu style={style.drawer} className={[`${Pure['pure-menu']}`]} style={{padding:''}}>
        <List className={Pure['pure-menu-list']} style={{paddingTop: ''}}>
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
      </Menu>
    </Paper>
  );
};

export default SideMenu;
