var express = require('express');
var app = express();

app.get('/', function(request, response) {
   response.write('Hello world');
   response.end();
});

app.get('/name', function(request, response) {
    response.write('Geromy');
    response.end();
});

app.get('/redirect', function(request, response) {
    response.redirect(301, '/surprise');
});

app.get('/date', function(request, response) {
    response.write(Date());
    response.end();
});

app.listen(3000);