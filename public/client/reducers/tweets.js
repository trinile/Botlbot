import {
  ADD_NEW_TWEETS,
  POST_TWEET,
  TRASH_TWEET,
  EDIT_TWEET_REQUEST,
  EDIT_TWEET,
  CANCEL_EDIT_TWEET,
} from '../constants.js';

function tweet(state, action) {
  console.log('calling action ------>');
  switch (action.type) {
    case ADD_NEW_TWEETS:
      return action.tweets.map(t => (
        Object.assign({}, t, { status: 'available' })
      ));
    case POST_TWEET:
      if (state.tweet_id_str === action.id) {
        return Object.assign({}, state, { status: 'posted' });
      }
      return state;
    case TRASH_TWEET:
      if (state.tweet_id_str === action.id) {
        return Object.assign({}, state, { status: 'trashed' });
      }
      return state;
    case EDIT_TWEET_REQUEST:
      if (state.tweet_id_str === action.id) {
        return Object.assign({}, state, { editing: true });
      }
      return state;
    case EDIT_TWEET:
      if (state.tweet_id_str === action.id) {
        return Object.assign({}, state, { editing: false, tweet_text: action.tweet_text });
      }
      return state;
    case CANCEL_EDIT_TWEET:
      if (state.tweet_id_str === action.id) {
        return Object.assign({}, state, { editing: false });
      }
      return state;
    default:
      return state;
  }
}

function tweets(state = /*JSON.parse(localStorage.getItem('tweets')) || */[], action) {
  console.log('in tweets state reducer');
  switch (action.type) {
    case ADD_NEW_TWEETS:
      return [
        ...state,
        ...tweet(null, action),
      ];
    case POST_TWEET:
    case TRASH_TWEET:
    case CANCEL_EDIT_TWEET:
    case EDIT_TWEET_REQUEST:
    case EDIT_TWEET:
      return state.map(t => tweet(t, action));
    default:
      return state;
  }
}

export default tweets;
