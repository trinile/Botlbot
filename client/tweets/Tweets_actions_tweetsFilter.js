import {
  TWEETS_FILTER,
  PAGE_FILTER,
} from '../app/App_constants';

export const tweetsFilter = (filter) => {
  return {
    type: TWEETS_FILTER,
    filter,
  };
};

export const pageFilter = (filter) => {
  return {
    type: PAGE_FILTER,
    filter,
  };
};
