var express = require('express');
var app = express();

app.use(express.static('public'));

var cities = {
   'Providence': 'Rhode Island',
   'Boston': 'Massachusetts',
   'Indianapolis': 'Indiana',
   'Chicago': 'Illinois',
   'Los Angeles': 'California'};

app.get('/cities', function(request, response) {
   if (request.query.limit > cities.length) {
      response.status(404).json('Error: limit of cities exceeded');
   }   
   if (request.query.limit > 0) {
      response.json(cities.slice(0, request.query.limit));
   } else {   
      response.json(Object.keys(cities));
   }
});

app.get('/cities/:name', function(request,response) {
   var name = request.params.name;
   var city = name[0].toUpperCase() + name.slice(1).toLowerCase();
   var description = cities[city];
   if (!description) {
      response.status(404).json('Not found!');
   } else {
      response.json(description);
   }
});

app.listen(process.env.PORT);