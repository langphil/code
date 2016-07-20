const express = require('express');
const app = express();

app.get('/hello', function(request, response) {
  response.send("Hello!");
});

//expose app
module.exports = app;
