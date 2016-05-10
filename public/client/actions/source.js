export function addSource(source) {
  return {
    type: 'ADD_SOURCE',
    source: `<span class="source">Source:${source}</span>`
  };
}
