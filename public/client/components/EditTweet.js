import React, { PropTypes } from 'react';
import styles from '../styles/tweet.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  main: {
    margin: '16px 32px 16px 0',
    width: '50%',
    float: 'right'
  },
  paper: {
    border: '1px #ddd',
    'border-radius': '4px',
    padding: '10px',
    color: 'green',
  }
};
class EditTweet extends React.Component {

  onChangeText(event) {
    event.preventDefault();
    const { tweet } = this.props;
    tweet.tweet_text = event.target.value;
  }
  render() {
    const { tweet, editTweet, trashTweet, cancelEdit } = this.props;
    return (
      <Card style={style.main}>
        <CardHeader
          title="Bot Generated Tweet" 
          subtitle={tweet.updated_at}
          avatar="http://lorempixel.com/100/100/nature/"
        />
        <CardTitle title="EDIT TEXT BELOW: " subtitle="Below is content you can edit" />
        <CardText styles={styles.paper}>
        <TextField 
          fullWidth={true} 
          id={tweet.bot_tweet_id.toString()} 
          defaultValue={tweet.tweet_text} 
          multiLine={true} 
          rows={1} 
          rowsMax={4}
          onBlur={this.onChangeText.bind(this)}
          >
        </TextField>
        </CardText>
        <Paper href="/linktooriginaltwittercontent" styles={styles.paper}>
          <ul>
            <li>Retweets: {tweet.retweet_count}</li>
            <li>Favorited: {tweet.favorite_count}</li>
            <li>Tweeted by: {tweet.user_screen_name}</li>
            <li>Followers: {tweet.followers_count}</li>
          </ul>
        </Paper>
        <CardActions>
          <FlatButton label="CANCEL" onClick={cancelEdit} />
          <FlatButton label="SAVE" onClick={editTweet} />
        </CardActions>
      </Card>
    );
  }
};

EditTweet.propTypes = {
  tweet: PropTypes.object,
  postTweet: PropTypes.func,
  trashTweet: PropTypes.func,
};

export default EditTweet;
