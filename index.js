var express = require('express');

var app = express();

var getRandomMessage = function(){

  function getRando(max) {
    var min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var messages = [
    "Hello there.",
    "I'm sorry, I cannot take any requests at this time.",
    "I can tell you how to do that.",
    "I can't do that Dave."
  ];
  return messages[getRando(messages.length)];
};


app.get('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
    message: getRandomMessage()
  }));
});

app.listen(8887, function(){
  console.log('Listening on port 8887');
});
