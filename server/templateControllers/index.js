const chunkHandler = {
  'my feed': require('./myFeed'),
  text: require('./text'),
};

function parseTemplate(template) {
  template.map( chunk => chunkHandler)
}
