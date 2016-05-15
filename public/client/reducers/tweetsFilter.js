import { TWEETS_FILTER,
} from '../constants.js';

const tweetsFilterReducer = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case TWEETS_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default tweetsFilterReducer;
