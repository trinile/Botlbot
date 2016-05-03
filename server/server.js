var express = require('express');

var app = express();

app.get('/auth', function(req, res) {
  res.send('hi');
});

app.listen(1337);
console.log('Listening on port 1337');
