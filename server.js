/*var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/', proxy({target: 'https://a-virtual-servidor.herokuapp.com', changeOrigin: true}));
app.listen(3200);

// http://localhost:4200/api/foo/bar -> https://a-virtual-servidor.herokuapp.com/api/foo/bar
