export function addTweets(tweets) {
  return {
    type: 'ADD_NEW_TWEETS',
    tweets,
  };
}
