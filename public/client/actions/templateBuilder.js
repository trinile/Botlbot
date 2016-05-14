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

export function toggleSelecting(id) {
  return {
    type: 'TOGGLE_SELECTING',
    id
  };
}

export function toggleStatus() {
  return {
    type: 'TOGGLE_STATUS'
  };
}
