import React, { PropTypes } from 'react';
import styles from '../styles/tweet.css';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Save, Cancel, Trash } from './TweetButtons';
import { NewsSource, TweetSource } from './tweet_sources';

import moment from 'moment';

const style = {
  main: {
    margin: '16px 32px 16px 0',
    width: '40%',
    float: 'right',
    padding: '5px',
    background: 'white',
  },
  paper: {
    border: '1px #ddd',
    'border-radius': '4px',
    padding: '10px',
    color: 'green',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '',
    width: '100%',
  },
  tweet: {
    backgroundColor: 'white',
  },
  buttons: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#879C87',
    padding: '',
  },
};

class EditTweet extends React.Component {
  
  onChangeText(event) {
    event.preventDefault();
    const { tweet } = this.props;
    tweet.bot_tweet_body = event.target.value;
  }

  getTime() {
    const { tweet } = this.props;
    return 'Generated ' + moment(tweet.created_at).fromNow()
  }

  render() {
    const { tweet, editTweet, trashTweet, cancelEdit } = this.props;
    return (
      <Card style={style.main}>
        <CardHeader
          title="EDITING Generated Tweet" 
          subtitle={this.getTime.bind(this)()}
          avatar="http://lorempixel.com/100/100/nature/"
          style={style.header}
        >
        <Trash tweet={tweet} trashTweet={trashTweet}/>
        </CardHeader>
        <CardText styles={styles.paper}>
        <TextField 
          fullWidth={true} 
          id={tweet.bot_tweet_id.toString()} 
          defaultValue={tweet.bot_tweet_body} 
          multiLine={true} 
          rows={1} 
          rowsMax={4}
          onBlur={this.onChangeText.bind(this)}
          >
        </TextField>
        {tweet.news_headline
        ? <NewsSource tweet={tweet} />
        : null
        }
        
        {tweet.tweet_id_str
          ? <TweetSource tweet={tweet}/>
          : null
        }
        </CardText>
        <CardActions style={style.buttons}>
          <Cancel tweet={tweet} cancelEdit={cancelEdit}/>
          <Save tweet={tweet} editTweet={editTweet}/>
        </CardActions>
      </Card>
    );
  }
}

EditTweet.propTypes = {
  tweet: PropTypes.object,
  editTweet: PropTypes.func,
  cancelEdit: PropTypes.func,
};

export default EditTweet;
