var path = require('path');
// var client = require('./db/redisClient.js');
var User = require('./db/controllers/usersController.js');
var Tweets = require('./db/controllers/tweetsController.js');

var getTweets = require('./searchAlgo.js');
const KEYS = {
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

var dummyTweets = require('./dummyTweets.js');

var ensureAuthenticated = function(req, res, next) {
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
    passport.authenticate('twitter', {
      successRedirect: '/dashboard',
      failureRedirect: '/'
    })
  );

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // app.get('/dashboard', ensureAuthenticated, function(req, res) {
  //   res.send('YOU DID IT');
  // });

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
        res.send(reply.slice(reply.length - 10, reply.length - 1));
      });
  });

  app.post('/postTweet', function(req, res) {
    //TODO: post to Twitter
    
    //what is the tweet format being passed in????
    // Tweets.addPostedTweet(tweet)
    //   .then(function(reply) {
    //     res.send('YAY you posted to database');
    //   });

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
