var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/cities', function(request, response) {
   var cities = ['Providence', 'Boston', 'Indianapolis', 'Chicago'];
   response.json(cities);
});

app.listen(process.env.PORT);