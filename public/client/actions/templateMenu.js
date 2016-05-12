export function navigateDown(key) {
  return {
    type: 'NAVIGATE_DOWN',
    key
  };
}

export function navigateUp() {
  return {
    type: 'NAVIGATE_UP'
  };
}
