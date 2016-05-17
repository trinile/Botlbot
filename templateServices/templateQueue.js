const queue = require('queue');
const parseTemplate = require('parseTemplate');
const Template = require('../server/db/controllers/templateController');
const Tweets = require('../server/db/controllers/tweetsController');

function createTemplateJob(id) {
  return (cb) => {
    Template.getTemplate(id)
    .then(JSONtemplate => parseTemplate(JSON.parse(JSONtemplate)))
    .then(generatedtweets => Tweets.saveGeneratedTweets(userId, generatedtweets))

  }
}

function enqueue(job) {

}

module.exports = {
  enqueue,
}
