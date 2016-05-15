const Promise = require('bluebird');
const chunkHandler = {
  'my feed': function(params, userId, n) {
    return require('./myFeed')(id, n);
  },
  text: function(params, userId, n) {
    return require('./text')(params.content, n);
  },
};

function zip(arrays) {
  const result = [];
  arrays.forEach(arary => arary.forEach((item, i) => {
    result[i] = (result[i] || []).concat(item);
  }));
  return result;
}

function parseTemplate(template, userId, n) {
  return zip(Promise.all(template.map(chunk => chunkHandler[chunk.type](chunk.params, userId, n))));
}
