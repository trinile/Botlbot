const Promise = require('bluebird');
require('isomorphic-fetch');
const API_KEY = process.env.WORDNIK_KEY;

const getRandomWord = (params) => {
  let include = params.partOfSpeech;
  let length = params.length + '';
  return fetch(`http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=${include}&minCorpusCount=10000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=${length || '-1'}&maxLength=${length || '-1'}&api_key=${WORDNIK_KEY}`)
    .then((response) => response.json())
    .then((response) => response.word)
    .catch((err) => {
      console.error(err);
      return '';
    });
};


/* 
http://api.wordnik.com:80/v4/words.json/
randomWord?hasDictionaryDef=true
&includePartOfSpeech=noun
&excludePartOfSpeech=family-name
&minCorpusCount=0&maxCorpusCount=-1
&minDictionaryCount=1&maxDictionaryCount=-1
&minLength=5&maxLength=-1
&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5



excludePartOfSpeech=noun,adjective,adverb,verb,interjection,
pronoun,preposition,affix,abbreviation,article,auxiliary-verb,
conjunction,definite-article,family-name,given-name,idiom,
imperative,noun-possessive,noun-plural,past-participle,
phrasal-prefix,proper-noun,proper-noun-plural,
proper-noun-possessive,suffix,verb-transitive,verb-intransitive
*/