export function updateTemplate(template) {
  return {
    type: 'UPDATE_TEMPLATE',
    template
  };
}

export function trashTemplate() {
  return {
    type: 'TRASH_TEMPLATE'
  };
}
