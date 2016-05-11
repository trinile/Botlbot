import React, { PropTypes } from 'react';
// import styles from '../styles/template.css';
import {IconMenu, RaisedButton, MenuItem} from 'material-ui';


const Source = ({
  template,
  addSource
}) => (
  <div >
    <h3>Add a source:</h3>
    <IconMenu 
      iconButtonElement={<RaisedButton label="Add a Source" />}
      onItemTouchTap={addSource}
      // value={''}
    >
      {/*<MenuItem value={'addSource'} primaryText="Add Source"/>*/}

      <MenuItem value={'myFeed'} primaryText="My Feed" />
      <MenuItem value={'News'} primaryText="News" />
      <MenuItem value={'randomTweet'} primaryText="Random Tweet" />
    </IconMenu>
  </div>
);

Source.propTypes = {
  template: PropTypes.array
};

export default Source;
