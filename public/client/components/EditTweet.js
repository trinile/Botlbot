import React, { PropTypes } from 'react';
import style from '../styles/tweet.js';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Save, Cancel, Trash } from './TweetButtons';
import { NewsSource, TweetSource } from './tweet_sources';
import Settings from 'material-ui/svg-icons/action/settings';
import moment from 'moment';

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
          avatar={<Settings style={style.avatar}/>}
          style={style.header}
        >
        <Trash tweet={tweet} trashTweet={trashTweet}/>
        </CardHeader>
        <CardText style={style.paper}>
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
