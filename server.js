const port = '8080';
const host = '0.0.0.0';
const express = require ('express');
const app = express();

//create variable look for index.js directory
var rules = require('./app');
//call variable - the 'boo' allows me to call a nested structure
app.use("/boo", rules);

app.listen(port, host);

console.log('Server running %s:%d...', host, port);

//
