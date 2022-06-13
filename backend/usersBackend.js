var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var contatos = "../data.json"


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/list', function(req, res) {
  res.json(users);
});

app.get('/list/:id', function(req, res) {
  contatos.forEach(function (user) {
  	if (user.id == req.params.id) {
  		res.json(user);
  		return;
  	}
  });
  res.status(404).end();
});

app.post('/list', function(req, res) {
  users.push(req.body);
  res.json(true);
});

app.listen(process.env.PORT || 3412);