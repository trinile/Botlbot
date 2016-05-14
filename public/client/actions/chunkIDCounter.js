export const incrementCounter = () => {
  return {
    type: 'INCREMENT_COUNTER'
  };
};

export const loadHighestId = (id) => {
  return {
    type: 'LOAD_HIGHEST_ID',
    id
  };
};
