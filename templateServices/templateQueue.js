const async = require('async');
const parseTemplate = require('./parseTemplate');
const Template = require('../server/db/controllers/templatesController');
const Tweets = require('../server/db/controllers/tweetsController');
const fixForDb = require('./helpers').fixForDb;

function createTemplateJob(templateId, userId, res) {
  console.log('job is running');
  return Template.getTemplate(templateId)
  .then(result => parseTemplate(
    result[0].template,
    userId,
    10)
  ).then(generatedtweets => generatedtweets.map(t => fixForDb(userId, t)))
  .then(fixedtweets => {
    console.log('generatedtweets', fixedtweets);
    res && res.status(200).json(fixedtweets);
    return Tweets.saveGeneratedTweets(fixedtweets);
  })
  .catch(err => {console.log(err); return err;});
}

const q = async.queue(
  (task, cb) =>
    createTemplateJob(task.template_id, task.user_twitter_id, task.res)
    .then(() => cb())
    .catch(cb),
  1
);

function enqueue(templates) {
  q.push(templates, (err) => console.log(err));
}

function processNext(template_id, user_twitter_id, res) {
  console.log('processingNext');
  q.unshift({ template_id, user_twitter_id, res }, (err) => console.log(err));
}

module.exports = {
  enqueue,
  processNext,
};
