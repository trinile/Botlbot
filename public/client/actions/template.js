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

export function loadTemplate(wholeTemplate) {
  return {
    type: 'LOAD_TEMPLATE',
    wholeTemplate
  };
}

export function loadIDs(ids) {
  return {
    type: 'LOAD_IDS',
    ids
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

export function editTemplateAsync(template) {
  return dispatch => {
    let data = JSON.stringify({
      template,
      name: template.name,
      id: template.id
    });
    console.log(data);
    dispatch(fetchRequest());
    return fetch('http://127.0.0.1:1337/templates/' + template.id, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      method: 'PUT', 
      credentials: 'same-origin',
      body: data
    })
      .then(res => {
        console.log('PUTTED!', res);
        if (res.status === 201) {
          dispatch(fetchSuccess());
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

export function deleteTemplateAsync(templateID) {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('http://127.0.0.1:1337/templates/' + templateID, {
      method: 'DELETE', 
      credentials: 'same-origin'
    })
      .then(res => {
        console.log('DELETED!', res);
        if (res.status === 201) {
          dispatch(fetchSuccess());
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

export function getTemplateAsync(id) {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('http://127.0.0.1:1337/templates/' + id, {
      method: 'GET', 
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        // if (res.status === 200) {
        dispatch(fetchSuccess());
        dispatch(loadTemplate(res));
        // }
        // else {
        //   dispatch(fetchFailure(res.status));
        // }
      })
      .catch(err => {
        dispatch(fetchFailure(err));
      });
  };
}

export function getTemplateNamesAsync() {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('http://127.0.0.1:1337/templates/', {
      method: 'GET', 
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(res => {
        dispatch(fetchSuccess());
        dispatch(loadIDs(res));
      })
      .catch(err => {
        dispatch(fetchFailure(err));
      });
  };
}
