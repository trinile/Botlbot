const path = require('path');
// const client = require('./db/redisClient.js');
const User = require('./db/controllers/userController.js');
const Tweets = require('./db/controllers/tweetsController.js');
const getTweets = require('./templateControllers/myFeed');
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

  app.post('/postTweet', function(req, res) {
    res.status(201);
  });

  //call to TWITTER TO GET TWEEETS
  app.get('/generate', ensureAuthenticated, function(req, res) {
    getTweets(req.user.id)
    .then(tweets => res.status(200).json(tweets))
    .catch(function(err) {
      console.log('you are bad at promises ============', err);
    });
  });

  app.get('/generateDummy', function(req, res) {
    res.json(dummyTweets);
  });

// call when dashboard is loaded -> retrieves data from database
  app.get('/getgenerate', function (req, res) {
    console.log('req.user.id ---------->', req.user.id);
    Tweets.getTweets(req.user.id, 'generatedtweets')
      .then(function (reply) {
        // TODO: how to paginate tweets 
        // reply.map (function(tweet, index) {
        //   return tweet['page'] = Math.floor(index / 5 ) + 1;
        // })
        //only retrieving 9 files for dev purposes
        res.json(reply.slice(reply.length - 21, reply.length - 1).reverse());
      });
  });

  app.get('/retrieve', function(req, res) {
    Tweets.retrieveTweets(req.user.id)
      .then(function(reply) {
        res.status(200).json(reply.slice(reply.length - 10, reply.length - 1));
      });
  });

  app.put('/edittweet/:id', function (req, res) {
    console.log('req-body-text ---------->', req.params.id, '------>', req.body);
    Tweets.modifyTweetText(req.params.id, req.body.text)
    .then((status) => res.status(201).send(status))
    .catch(err => res.status(500).send(err));
  });

  app.post('/posttweet/:id', function(req, res) {
    Tweets.joinTweetAndUserByTweetId(req.params.id)
    .then(response => helpers.postTweet(response))
    .then(data => Tweets.savePostedTweet(data))
    // using bot_tweet_id to modify generatedtweets table to show as 'posted'
    .then(id => Tweets.modifyTweetStatus(req.params.id, 'posted'))
    .then(status => res.status(201).send(status))
    .catch(err => res.status(500).send(err))
  })
  
  app.get('/getposted', function(req, res) {
    // pass in user id
    Tweets.getTweets(req.user.id, 'posted')
    // send back tweets in reverse order (most recent first)
    .then(reply => res.status(200).json(reply.reverse()))
    .catch(err => res.status(500).send(err))
  })

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
    console.log(req.session);
    res.sendFile(path.join(__dirname, '/../build/bundle.html'));
  });
  app.get('/*', ensureAuthenticated, function(req, res) {
    console.log(req.session);
    res.sendFile(path.join(__dirname, '/../build/bundle.html'));
  });
};
