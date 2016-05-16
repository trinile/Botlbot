import {
  ADD_NEW_TWEETS,
  POST_TWEET,
  TRASH_TWEET,
  EDIT_TWEET,
  EDIT_TWEET_REQUEST,
  CANCEL_EDIT_TWEET,
  POSTED_TWEETS,
  SCHEDULE_TWEET,
} from '../constants.js';
import { fetchRequest, fetchSuccess, fetchFailure } from './requestStatus';

export function requestEdit(id) {
  return {
    type: EDIT_TWEET_REQUEST,
    id,
  };
}
export function editTweet(id, tweet_text) {
  return {
    type: EDIT_TWEET,
    id,
    tweet_text,
  };
}

export function cancelEditTweet(id) {
  return {
    type: CANCEL_EDIT_TWEET,
    id,
  };
}
export function addTweets(tweets) {
  return {
    type: ADD_NEW_TWEETS,
    tweets,
  };
}

export function postTweet(id) {
  return {
    type: POST_TWEET,
    id,
  };
}

export function trashTweet(id) {
  return {
    type: TRASH_TWEET,
    id,
  };
}

export function scheduleTweet(id, schedule) {
  return {
    type: SCHEDULE_TWEET,
    id,
    schedule
  }
}
export function postedTweets(tweets) {
  return {
    type: POSTED_TWEETS,
    postedtweets,
  }
}
//set into local storage
//this should probably be called when dashboard mounts and user is authenticated
//makes a call to api to retrieve most current tweets in database

export function getTweetsAsync() {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('http://127.0.0.1:1337/tweets/generated',
      { method: 'GET', credentials: 'same-origin' })
      .then(result => result.json())
      .then(result => {
        console.log('result ----> ', result);
        localStorage.setItem('tweets', JSON.stringify(result));
        return dispatch(addTweets(result));
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchFailure(err));
      });
  };
};

export function getPostedTweetsAsync() {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('http://127.0.0.1:1337/tweets/posted', { method: 'GET', credentials: 'same-origin'})
      .then(result => result.json())
      .then(result => {
        console.log('result ----> ', result);
        localStorage.setItem('postedtweets', JSON.stringify(result));
        return result;
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchFailure(err));
      });
  };
}

// id is generated tweet ID
export function postTweetAsync(id) {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('http://127.0.0.1:1337/tweets/' + id, { method: 'POST', credentials: 'same-origin' })
      .then(res => {
        if (res.status === 201) {
          dispatch(fetchSuccess());
          dispatch(postTweet(id));
        } else if (res.status === 500) {
          dispatch(fetchFailure(res.status));
        }
      })
      .catch(err => {
        dispatch(fetchFailure(err));
      });
  };
}

export function editTweetAsync(id, tweet_text) {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('http://127.0.0.1:1337/tweets/' + id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'same-origin',
      body: JSON.stringify({ text: tweet_text }),
    })
    .then(res => {
      console.log('response ----------> ', res);
      if (res.status === 201) {
        dispatch(fetchSuccess());
        dispatch(editTweet(id, tweet_text));
      } else if (res.status === 500) {
        dispatch(fetchFailure(res.status));
      }
    })
    .catch(err => {
      dispatch(fetchFailure(err));
    });
  };
}

export function scheduleTweetAsync(id, schedule) {
  console.log('IN SCHEDULE TWEET ASYNC _----->di ---------> ', id, schedule);
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('http://127.0.0.1:1337/scheduletweet/' + id,
      { method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify({ schedule: schedule }),
      })
      .then(res => {
        if (res.status === 201) {
          dispatch(fetchSuccess());
          dispatch(scheduleTweet(id, schedule));
        } else if (res.status === 500) {
          dispatch(fetchFailure(res.status));
        }
      })
      .catch(err => {
        dispatch(fetchFailure(err));
      });
  };
}

export function trashTweetAsync(id) {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('http://127.0.0.1:1337/tweets/' + id, { method: 'DELETE', credentials: 'same-origin'})
      .then(res => {
        if (res.status === 201) {
          dispatch(fetchSuccess());
          dispatch(trashTweet(id));
        } else if (res.status === 500) {
          dispatch(fetchFailure(res.status));
        }
      })
      .catch(err => {
        dispatch(fetchFailure(err));
      });
  };
}
