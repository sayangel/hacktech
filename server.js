var express = require('express'),
async = require('async'),
Twit = require('twit'),
request = require('request'),
_ = require('underscore');

var app = express();
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.static(__dirname));

var server = require('http').Server(app);

app.get('/', function(req, res) {

  res.send('Coding something...');
});

var port = process.env.PORT || 5000;
server.listen(port, function() {
  console.log("Listening on " + port);
}); 