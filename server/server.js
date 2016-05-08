var express = require('express');

var session = require('express-session');
var client = require('./redis/redisClient.js');
var RedisStore = require('connect-redis')(session);

var db = require('./db/db.js');
var passport = require('passport');
require('dotenv').config();

// configure passport settings
require('./passport.js')(passport);

var app = express();

module.exports = app;

app.use(express.static(__dirname + '/../build/'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(session({
  store: new RedisStore({
    client: client
  }),
  secret: 'SLDGJLSDHGLSKDJGLSKDGSECRET',
  resave: false,
  saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());

// routes
require('./routes.js')(app, passport);

app.listen(1337);
console.log('Listening on port 1337');
