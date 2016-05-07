export function addTweets(tweets) {
  return {
    type: 'ADD_NEW_TWEETS',
    tweets,
  };
}

export function postTweet(id) {
  return {
    type: 'POST_TWEET',
    id,
  };
}

export function trashTweet(id) {
  return {
    type: 'TRASH_TWEET',
    id,
  };
}
