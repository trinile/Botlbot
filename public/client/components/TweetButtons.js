import React, { PropTypes } from 'react';
// import styles from '../styles/tweet.css';
import LaunchIcon from 'material-ui/svg-icons/action/launch';
import Delete from 'material-ui/svg-icons/action/delete';
// import Schedule from 'material-ui/svg-icons/action/schedule';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import Send from 'material-ui/svg-icons/content/send';
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
    fill: '#6A7C86',
    color: '#6A7C86',
  },
};

export const Cancel = ({ tweet, cancelEdit, setSnackMessage }) => {
  const onCancelEdit = () => {
    return cancelEdit()
    .then(() => setSnackMessage('No changes made to tweet'))
    .catch(console.log('error in snack and redirecting'));
  }

  return (
    <FloatingActionButton
    mini={true}
    onTouchTap={onCancelEdit}
    style={style.icon}
    backgroundColor="#89bdd3"
    > 
      <CancelIcon />
    </FloatingActionButton> 
  );
};

export const Save = ({ tweet, editTweet, setSnackMessage, redirectToPosted}) => {
  const onTouchSave = () => {
    return editTweet()
    .then(()=> redirectToPosted())
    .then(()=> setSnackMessage('Posted successfully!'))
    .catch(console.log('error in snack and redirecting'));
  };

  return (
    <FloatingActionButton
    mini={true}
    onTouchTap={onTouchSave}
    style={style.icon}
    backgroundColor="#89bdd3"
    > 
      <SaveIcon />
    </FloatingActionButton> 
  );
};
export const Schedule = ({ tweet, scheduleTweet, setSnackMessage, redirectToScheduled}) => {
  const onTouchSchedule = () => {
    return scheduleTweet()
    .then(()=> redirectToScheduled())
    .then(()=> setSnackMessage('Scheduled successfully!'))
    .catch(console.log('error in snack and redirecting'));
  };

  return (
    <SchedulePopOver
      style={style.icon}
      tweet={tweet}
      onSchedule={onTouchSchedule} 
    />
  );
};

export const Post = ({tweet, postTweet, setSnackMessage, redirectToPosted }) => {
  const onTouchPost = () => {
    return postTweet()
    .then(()=> redirectToPosted())
    .then(()=> setSnackMessage('Posted successfully!'))
    .catch(console.log('error in snack and redirecting'));
  };

  return (
  <FloatingActionButton
    mini={true}
    linkButton={true}
    onTouchTap={onTouchPost}
    style={style.icon}
    backgroundColor="#89bdd3"
  >
    <Send />
  </FloatingActionButton>
  );
};

export const Edit = ({tweet, requestEdit}) => {
  return (
    <FloatingActionButton
    mini={true}
    onTouchTap={requestEdit}
    backgroundColor="#89bdd3"
    style={style.icon}
    >
      <EditIcon/>
    </FloatingActionButton>
  );
};

export const Trash = ({tweet, trashTweet, setSnackMessage }) => {
  const onTouchTrash = () => {
    return trashTweet()
    .then(()=> setSnackMessage('Deleted successfully!'))
    .catch(console.log('error in snack and redirecting'));
  };
  return (
    <FloatingActionButton
      mini={true}
      style={style.icon}
      onTouchTap={onTouchTrash}
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
      href={tweet.bot_tweet_body.match(/https?[\S]+\b/)[0]} 
      style={style.icon}
      backgroundColor="white"
      iconStyle={style.launch}
    >
    <LaunchIcon/>
  </FloatingActionButton>
  );
}
