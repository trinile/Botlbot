function repeatSameText(text, times) {
  const result = [];
  times = times || 20;
  while (result.length < times) {
    result.push(text);
  }
  return result;
}

module.exports = repeatSameText;
