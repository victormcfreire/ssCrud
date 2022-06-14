var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var users = [
  {id: 0001, name: "joe", username: "joe123", password: 4521},
  {id: 0002, name: "mark", username: "mark123", password: 4481},
  {id: 0003, name: "ellie", username: "ellie123", password: 4641},
  {id: 0003, name: "oscar", username: "oscar123", password: 5771},
]


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
  users.forEach(function (user) {
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