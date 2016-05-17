const path = require('path');
// const client = require('./db/redisClient.js');
const User = require('./db/controllers/userController.js');
// temp will be removed when services are up
const getTweetsFromFeed = require('../templateServices/myFeed');
const Tweets = require('./db/controllers/tweetsController');
const twit = require('../templateServices/helpers').twit;

const ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.send('you aren\'t allowed there! try signing in');
  // Return error content: res.jsonp(...) or redirect: res.redirect('/login')
};

module.exports = function(app, passport) {

  // Redirect the user to Twitter for authentication.  When complete, Twitter
  // will redirect the user back to the application at
  //   /auth/callback
  app.get('/auth', passport.authenticate('twitter'));

  // Twitter will redirect the user to this URL after approval.  Finish the
  // authentication process by attempting to obtain an access token.  If
  // access was granted, the user will be logged in.  Otherwise,
  // authentication has failed.
  app.get('/auth/callback',
    passport.authenticate('twitter', {
      failureRedirect: '/',
      successRedirect: '/dashboard'
    })
  );

  app.get('/logout', function(req, res) {
    console.log(req)
    req.logout();
    res.clearCookie('test');
    res.status(202).send('foooo');
  });

  app.get('/authenticate', ensureAuthenticated, function(req, res) {
    res.status(200).json({ authID: req.user.id });
  });

  //call to TWITTER TO GET TWEEETS
  app.get('/getandsave', ensureAuthenticated, function(req, res) {
    getTweetsFromFeed(req.user.id)
    .then(tweets => Tweets.saveGeneratedTweets(req.user.id, tweets))
    .then(() => res.status(200).send('success!'))
    .catch(function(err) {
      console.log('you are bad at promises ============', err);
    });
  });

// call when dashboard is loaded -> retrieves data from database
  app.get('/tweets/generated', function (req, res) {
    Tweets.getGeneratedTweets(req.user.id)
    .then(results => res.status(200).json(results))
    .catch(err => res.status(500).send(err));
  });

  app.get('/tweets/posted', function (req, res) {
    Tweets.getPostedTweets(req.user.id)
    .then(results => res.status(200).json(results))
    .catch(err => res.status(500).send(err));
  });

  app.put('/tweets/:id', function (req, res) {
    console.log('req-body-text ---------->', req.params.id, '------>', req.body);
    Tweets.modifyTweetText(req.params.id, req.body.text)
    .then((status) => res.status(201).send(status))
    .catch(err => res.status(500).send(err));
  });

  app.post('/tweets/:id', function(req, res) {
    Tweets.joinTweetAndUserByTweetId(req.params.id)
    .then(response => twit.post(
      `${response.tweet_text} https://www.twitter.com/${response.user_screen_name}/status/${response.tweet_id_str}`,
      response.token, response.tokenSecret))
    .then(data => Tweets.savePostedTweet(data))
    // using bot_tweet_id to modify generatedtweets table to show as 'posted'
    .then(id => Tweets.modifyTweetStatus(req.params.id, 'posted'))
    .then(status => res.status(201).send(status))
    .catch(err => res.status(500).send(err))
  });

  // create route for scheduling
  app.post('/scheduletweet/:id', function(req, res) {
    console.log(req.body);
    Tweets.scheduleTweet(req.params.id, req.body.schedule)
    .then(reply => res.status(201).send(reply))
    .catch(err => res.status(500).send(err))
  })
  // trash tweet on client side does not delete from generated tables.
  // set up worker to clear out database periodically
  app.put('/trashtweet/:id', function(req, res) {
    Tweets.modifyTweetStatus(req.params.id, 'trashed')
    .then(status => res.status(201).send(status))
    .catch(err => res.status(500).send(err))
  });

  app.post('/buildTemplate', function(req, res) {
    console.log('HEY LOOK HERE', req.body);
    req.body ? res.status(201).send('you did it') : res.status(400).send('you didn\'t do it');
  });

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/../build/bundle.html'));
  });
  app.get('/*', ensureAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, '/../build/bundle.html'));
  });
};
