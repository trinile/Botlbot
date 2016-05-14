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

export function addChunk(id, chunk) {
  return {
    type: 'ADD_CHUNK',
    id,
    chunk
  };
}

export function editChunk(id, chunk) {
  return {
    type: 'EDIT_CHUNK',
    id,
    chunk
  };
}

export function deleteChunk(id) {
  return {
    type: 'DELETE_CHUNK',
    id
  };
}
