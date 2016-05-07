function tweet(state, action) {
  switch (action.type) {
    case 'ADD_NEW_TWEETS':
      return action.tweets.map(t => (
        Object.assign({}, t, { posted: false, trashed: false })
      ));
    case 'POST_TWEET':
      if (state.id_str === action.id) {
        return Object.assign({}, state, { posted: true });
      }
      return state;
    case 'TRASH_TWEET':
      if (state.id_str === action.id) {
        return Object.assign({}, state, { trashed: true });
      }
      return state;
    default:
      return state;
  }
}

function tweets(state = [], action) {
  switch (action.type) {
    case 'ADD_NEW_TWEETS':
      return [
        ...state,
        ...tweet(null, action),
      ];
    case 'POST_TWEET':
    case 'TRASH_TWEET':
      return state.map(t => tweet(t, action));
    default:
      return state;
  }
}

export default tweets;
