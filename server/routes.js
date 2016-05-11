const path = require('path');
// const client = require('./db/redisClient.js');
const User = require('./db/controllers/userController.js');
const Tweets = require('./db/controllers/tweetsController.js');
const getTweets = require('./searchAlgo.js');
const dummyTweets = require('./dummyTweets.js');
const helpers = require('./helpers');

const ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  else {
    res.send('you aren\'t allowed there! try signing in');
    // Return error content: res.jsonp(...) or redirect: res.redirect('/login')
  }
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
    passport.authenticate('twitter', {failureRedirect: '/'}),
      function(req, res) {

        res.redirect('/dashboard');
      })

  app.get('/logout', function(req, res) {
    console.log(req)
    req.logout();
    res.clearCookie('test');
    res.status(202).send('foooo');
  });

  // app.get('/dashboard', ensureAuthenticated, function(req, res) {
  //   res.send('YOU DID IT');
  // });

  app.get('/authUser', ensureAuthenticated, function(req, res) {
    res.status(200).json({ authID: req.user.id });
  });

  app.get('/generate', ensureAuthenticated, function(req, res) {

    User.retrieveUser(req.user.id, 'token', 'tokenSecret')
      .then(function(reply) {
        console.log('from retrieve users ==========', reply);
        getTweets(reply[0].token, reply[0].tokenSecret, req.user.id, res);
      })
      .catch(function(err) {
        console.log('you are bad at promises ============', err);
      })
  });

  app.get('/generateDummy', function(req, res) {
    res.json(dummyTweets);
  });

  app.get('/retrieve', function(req, res) {
    Tweets.retrieveTweets(req.user.id)
      .then(function(reply) {
        res.status(200).json(reply.slice(reply.length - 10, reply.length - 1));
      });
  });

  app.post('/postTweet/:id', function(req, res) {
    Tweets.joinTweetAndUserByTweetId(req.params.id)
    .then(response => helpers.postTweet(response))
    .then(data => Tweets.savePostedTweet(data))
    .then((id) => res.status(201).send(id))
    .catch(err => res.status(500).send(err));
  });

  app.get('/', function(req, res) {
    console.log(req.session);
    res.sendFile(path.join(__dirname, '/../build/bundle.html'));
  });
  app.get('/*', ensureAuthenticated, function(req, res) {
    console.log(req.session);
    res.sendFile(path.join(__dirname, '/../build/bundle.html'));
  });

};
