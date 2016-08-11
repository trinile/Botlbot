import React, { PropTypes } from 'react';
import style from './styles/Tweets_styles.js';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { Save, Cancel, Trash } from './Tweets_component_TweetButtons';
import NewsSource from './Tweets_component_NewsSource';
import TwitterSource from './Tweets_component_TwitterSource';
import Settings from 'material-ui/svg-icons/action/settings';
import moment from 'moment';
import Pure from 'purecss/build/pure-min.css';
import Grid from 'purecss/build/grids-responsive-min.css';
import Offset from '../app/pureCSS/offset.css';

class EditTweet extends React.Component {
  onChangeText(event) {
    event.preventDefault();
    const newBody = event.target.value;
    this.props.tweet.bot_tweet_body = newBody;
  }

  getTime() {
    const { tweet } = this.props;
    return `Generated ${moment(tweet.created_at).fromNow()}`
  }

  render() {
    const { tweet, editTweet, trashTweet, cancelEdit, setSnackMessage } = this.props;
    return (
      <Card style={style.main} className={[`${Grid["pure-u-1"]} 
        ${Grid["pure-u-md-1-2"]} ${Grid["pure-u-lg-1-3"]} ${Offset["offset-md-1-12"]}`]}>
        <CardHeader
          title="EDITING Generated Tweet" 
          subtitle={this.getTime.bind(this)()}
          avatar={<Settings style={style.avatar}/>}
          style={style.header}
        >
        <Trash
          tweet={tweet}
          trashTweet={trashTweet}
          setSnackMessage={setSnackMessage}
        />
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
          ? <TwitterSource tweet={tweet}/>
          : null
        }
        </CardText>
        <CardActions style={style.buttons}>
          <Cancel 
            tweet={tweet}
            cancelEdit={cancelEdit}
            oldText={tweet.orig_text}/>
          <Save 
            tweet={tweet}
            editTweet={editTweet}
            setSnackMessage={setSnackMessage}/>
        </CardActions>
      </Card>
    );
  }
}

EditTweet.propTypes = {
  tweet: PropTypes.object,
  editTweet: PropTypes.func,
  cancelEdit: PropTypes.func,
  setSnackMessage: PropTypes.func,
  trashTweet: PropTypes.func,
};

export default EditTweet;
