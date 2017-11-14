var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });



app.post('/thank', urlencodedParser, function (req, res){
  var reply='';
  reply += "Your Lastname is" + req.body.lastname;
  reply += "Your Firstname is" + req.body.firstname;
  console.log("done");
  res.send(reply);
});

app.get('/thank', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(8081, function () {
  var host = '127.0.0.1';
  var port = server.address().port;
  console.log("Example app listening at %s:%s Port", host, port);
});
