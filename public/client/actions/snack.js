export function setSnackMessage(message) {
  return {
    type: 'SET_SNACK_MESSAGE',
    message
  };
}

export function closeSnack() {
  return {
    type: 'CLOSE_SNACK'
  };
}
