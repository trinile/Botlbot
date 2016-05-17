import { fetchRequest, fetchSuccess, fetchFailure } from './requestStatus';

export function trashTemplate() {
  return {
    type: 'TRASH_TEMPLATE'
  };
}

export function saveTemplate() {
  return {
    type: 'SAVE_TEMPLATE'
  };
}

export function addChunk(index, chunk, id) {
  return {
    type: 'ADD_CHUNK',
    index,
    chunk,
    id
  };
}

export function editChunk(index, chunk) {
  return {
    type: 'EDIT_CHUNK',
    index,
    chunk
  };
}

export function deleteChunk(index) {
  return {
    type: 'DELETE_CHUNK',
    index
  };
}

export function updateName(name) {
  return {
    type: 'UPDATE_NAME',
    name
  };
}

export function postTemplateAsync(template) {
  return dispatch => {
    let data = JSON.stringify({
      template,
      name: template.name
    });
    console.log(data);
    dispatch(fetchRequest());
    return fetch('http://127.0.0.1:1337/templates/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      method: 'POST', 
      credentials: 'same-origin',
      body: data
    })
      .then(res => {
        console.log(res);
        if (res.status === 201) {
          dispatch(fetchSuccess());
          // dispatch(postTweet(id));
        }
        else {
          dispatch(fetchFailure(res.status));
        }
      })
      .catch(err => {
        dispatch(fetchFailure(err));
      });
  };
}
