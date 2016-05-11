import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

// const style = {
//   display: 'inline-block',
//   margin: '16px 32px 16px 0',
//   width: '30%',
//   position: 'fixed'
// };

class SideMenu extends React.Component {
  render() {
    return (
      <Paper zDepth={1} rounded={false}>
        <Menu>
          <MenuItem primaryText="Profile" />
          <MenuItem primaryText="Build a Bot" />
          <MenuItem primaryText="Your Bots" />
          <MenuItem primaryText="Bot Tweets History" />
          <MenuItem primaryText="Logout"/>
        </Menu>
      </Paper>
    )
  }
}

export default SideMenu;
