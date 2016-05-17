export const incrementCounter = () => {
  return {
    type: 'INCREMENT_COUNTER'
  };
};

export const loadHighestId = (template) => {
  return {
    type: 'LOAD_HIGHEST_ID',
    template
  };
};
