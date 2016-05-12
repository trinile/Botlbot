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
    chunk,
    id
  };
}
