const Promise = require('bluebird');
const chunkHandler = {
  'my feed': require('./myFeed'),
  text: require('./text'),
};

function zip(arrays) {
  const result = [];
  arrays.forEach(arary => arary.forEach((item, i) => {
    result[i] = (result[i] || []).concat(item);
  }));
  return result;
}

function parseTemplate(template, userId) {
  return zip(Promise.all(template.map(chunk => chunkHandler[chunk.type](chunk.params, userId))));
}
