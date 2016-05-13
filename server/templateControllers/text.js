function repeatSameText(text, times) {
  const result = [];
  while (result.length < times) {
    result.push(text);
  }
  return result;
}

chunk => chunk.params.content
