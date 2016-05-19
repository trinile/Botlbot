const Promise = require('bluebird');
require('isomorphic-fetch');
const _ = require('lodash');
const API_KEY = process.env.WORDNIK_KEY;
const normalizeArray = require('./helpers').normalizeArray;

const getRelatedWords = (params, n) => {
  const keyword = params.keyword;
  const relationship = params.relationship === 'synonym' ? 'same-context' : (params.relationship || 'rhyme');

  return fetch(`http://api.wordnik.com:80/v4/word.json/${keyword}/relatedWords?useCanonical=true&relationshipTypes=${relationship}&limitPerRelationshipType=${n}&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(response => response[0] ? response[0].words : [])
    .then(response => normalizeArray(response, n))
    .catch((err) => {
      console.error(err);
      return _.range(n).map(i => "platypus");
    });
};

module.exports = getRelatedWords;

/* 
http://api.wordnik.com:80/v4/words.json/
randomWord?hasDictionaryDef=true
&includePartOfSpeech=noun
&excludePartOfSpeech=family-name
&minCorpusCount=0&maxCorpusCount=-1
&minDictionaryCount=1&maxDictionaryCount=-1
&minLength=5&maxLength=-1
&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5

http://api.wordnik.com:80/v4/word.json/salami/relatedWords?
useCanonical=true&relationshipTypes=synonym&
limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5


excludePartOfSpeech=noun,adjective,adverb,verb,interjection,
pronoun,preposition,affix,abbreviation,article,auxiliary-verb,
conjunction,definite-article,family-name,given-name,idiom,
imperative,noun-possessive,noun-plural,past-participle,
phrasal-prefix,proper-noun,proper-noun-plural,
proper-noun-possessive,suffix,verb-transitive,verb-intransitive
*/