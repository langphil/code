const pickOne = require('pick-one');
const motivations = require('motivations');
const express = require('express');
const app = express();

app.get('/hello', function(request, response){
  response.send("Hello world!");
});

app.get('/motivations/random', function(request, response){
  response.send(pickOne(motivations));
});

app.get('/motivations/:id', function(request, response) {
  response.send(motivations[request.params.id]);
// above will generate a range of urls based upon the id that is placed at the end of the slug
// response.send(motivations[1]);
// response.send(pickOne(motivations));
//
});

//expose app
module.exports = app;
