var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port)
});

app.post('/thank', urlencodedParser, function (req, res){
  var reply='';
  reply += "Your Lastname is" + req.body.lastname;
  reply += "Your Firstname is" + req.body.firstname;
  console.log("done");
  res.send(reply);
});
