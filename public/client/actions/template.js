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

export function toggleEditing(id) {
  return {
    type: 'TOGGLE_EDITING',
    id
  };
}

export function toggleAdding(id) {
  return {
    type: 'TOGGLE_ADDING',
    id
  };
}

export function toggleStatus() {
  return {
    type: 'TOGGLE_STATUS'
  };
}
