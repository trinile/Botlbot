import {
  SCHEDULE_TWEET,
} from '../app/App_constants.js';
import { fetchRequest, fetchSuccess, fetchFailure } from '../app/App_actions_requestStatus';
import fetch from 'isomorphic-fetch';

// id is bot_tweet_id from generatedtweets table

export function scheduleTweet(id, schedule) {
  return {
    type: SCHEDULE_TWEET,
    id,
    schedule,
  };
}
// Below are async actions that will make a request to API endpoint

// scheduling a tweet by a user changes tweet_status to 'scheduled'
// and inserts entry into scheduledtweets table and schedule_id into generatedtweets as foreign key
export function scheduleTweetAsync(id, schedule) {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('/tweets/schedule/' + id,
      { method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify({ schedule }),
      })
      .then(res => {
        if (res.status === 201) {
          dispatch(fetchSuccess());
          dispatch(scheduleTweet(id, schedule));
        } else if (res.status === 500) {
          dispatch(fetchFailure(res.status));
        }
      })
      .catch(err => dispatch(fetchFailure(err)));
  };
}
