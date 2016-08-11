import moment from 'moment';

//helper to display time of tweet
function getTime(tweet) {
  return moment(tweet.created_at).calendar();
};

//helper to retrieve twitter usern info stored in local storage
function getUserInfo(param) {
  const info = localStorage.getItem('userInfo');
  return JSON.parse(info)[param];
}

//construct links from tweet id
function tweetUrl(tweet) {
  const userName = getUserInfo('username');
  return `https://twitter.com/${userName}/status/${tweet.retweet_id}`
};

module.exports = {
  getTime,
  getUserInfo,
  tweetUrl,
};
  
