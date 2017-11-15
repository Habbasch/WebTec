var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static('Public'));

app.post('/thank', urlencodedParser, function (req, res){
  var reply='';
  reply += "Your Lastname is" + req.body.lastname;
  reply += "Your Firstname is" + req.body.firstname;
  console.log("done");
  res.send(reply);
});

app.get('/', function (req, res) {
  res.sendfile('./Public/index.html');
});

var server = app.listen(8080, function () {
  var host = '127.0.0.1';
  var port = server.address().port;
  console.log("Example app listening at %s:%s Port", host, port);
});
