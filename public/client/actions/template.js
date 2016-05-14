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
