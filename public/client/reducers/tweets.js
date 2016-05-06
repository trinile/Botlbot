function tweets(state = [], action) {
  switch (action.type) {
    case 'ADD_NEW_TWEETS':
      return [
        ...state,
        ...action.tweets,
      ];
    default:
      return state;
  }
}

export default tweets;
