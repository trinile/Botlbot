const _ = require('lodash');

const randomValue = (array) => 
  array[Math.floor(Math.random() * array.length)] || 'wow';

const chooseWords = (list, n) =>
  _.range(n).map(i => randomValue(list));

module.exports = chooseWords;
