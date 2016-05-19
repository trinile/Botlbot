import React, { PropTypes } from 'react';
// import styles from '../styles/tweet.css';
import LaunchIcon from 'material-ui/svg-icons/action/launch';
import Delete from 'material-ui/svg-icons/action/delete';
// import Schedule from 'material-ui/svg-icons/action/schedule';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import Publish from 'material-ui/svg-icons/editor/publish';
import SaveIcon from 'material-ui/svg-icons/content/save';
import CancelIcon from 'material-ui/svg-icons/content/clear';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SchedulePopOver from './Scheduler';

const style = {
  icon: {
    display: 'inline-block',
    boxShadow: '0px',
    backgroundColor: '',
  },
  launch: {
    display: 'inline-block',
    boxShadow: '0px',
    fill: 'black',
    color: 'black',
  },
};

export const Cancel = ({ tweet, cancelEdit }) => {
  return (
    <FloatingActionButton
    mini={true}
    onTouchTap={cancelEdit}
    style={style.icon}
    backgroundColor="#879C87"
    > 
      <CancelIcon />
    </FloatingActionButton> 
  );
};

export const Save = ({ tweet, editTweet }) => {
  return (
    <FloatingActionButton
    mini={true}
    onTouchTap={editTweet}
    style={style.icon}
    backgroundColor="#879C87"
    > 
      <SaveIcon />
    </FloatingActionButton> 
  );
};
export const Schedule = ({ tweet, scheduleTweet }) => {
  return (
    <SchedulePopOver
      style={style.icon}
      tweet={tweet}
      onSchedule={scheduleTweet} 
    />
  );
};

export const Post = ({tweet, postTweet}) => {
  return (
  <FloatingActionButton
    mini={true}
    linkButton={true}
    onTouchTap={postTweet}
    style={style.icon}
    backgroundColor="#879C87"
  >
    <Publish />
  </FloatingActionButton>
  );
};

export const Edit = ({tweet, requestEdit}) => {
  return (
    <FloatingActionButton
    mini={true}
    onTouchTap={requestEdit}
    backgroundColor="#879C87"
    style={style.icon}
    >
      <EditIcon/>
    </FloatingActionButton>
  );
};

export const Trash = ({tweet, trashTweet}) => {
  return (
    <FloatingActionButton
      mini={true}
      style={style.icon}
      onTouchTap={trashTweet}
      backgroundColor="white"
      iconStyle={style.launch}
    >
      <Delete/>
    </FloatingActionButton>
  );
};

export const Launch = ({tweet}) => {
  return (
    <FloatingActionButton 
    mini={true}
    linkButton={true} 
    href={tweet.bot_tweet_body} 
    style={style.icon}
    backgroundColor="white"
    iconStyle={style.launch}
    >
    <LaunchIcon/>
  </FloatingActionButton>
  );
}
