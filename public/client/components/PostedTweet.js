import React, { PropTypes } from 'react';
import styles from '../styles/tweet.css';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  main: {
    margin: '16px 32px 16px 0',
    width: '50%',
    float: 'right',
  },
  paper: {
    border: '1px #ddd',
    borderRadius: '4px',
    padding: '10px',
    color: 'green',
  },
};

export default class PostedTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      expanded: false,
    });
  }
  handleExpandChange(expanded){
    this.setState({expanded: expanded});
  }
  handleExpand(){
    this.setState( {expanded: true} );
  }

  render() {
    const { tweet } = this.props;
    return (
      <Card style={style.main}>
        <CardHeader
          title="Posted to Twitter" 
          subtitle={tweet.created_at}
          avatar="http://lorempixel.com/100/100/nature/"
        />
        <CardTitle title="Tweet Text: " subtitle="Below is content generated for tweet" />
      
        <CardText style={style.paper}>
        {tweet.tweet_text}
        </CardText>
        <CardTitle title="Statistics for Posted Tweet" subtitle="Click to see how your bot tweet did!"
        actAsExpander={true} showExpandableButton={true}/>
        <CardText expandable={true}>
        <Paper>
          <ul>
            <li>Retweets: {tweet.retweet_count}</li>
            <li>Favorited: {tweet.favorite_count}</li>
          </ul>
          </Paper>
        </CardText>
      </Card>
    );
  };
}

PostedTweet.propTypes = {
  tweet: PropTypes.object,
};
