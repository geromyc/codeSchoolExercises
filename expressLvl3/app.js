var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

var cities = {
   'Providence': 'Rhode Island',
   'Boston': 'Massachusetts',
   'Indianapolis': 'Indiana',
   'Chicago': 'Illinois',
   'Los Angeles': 'California'};
   
app.param('name', function(request, response, next){
   var name = request.params.name;
   var city = name[0].toUpperCase() + name.slice(1).toLowerCase();
   request.cityName = city;
   next();
});

app.get('/cities', function(request, response) {
   if (request.query.limit > cities.length) {
      response.status(404).json('Error: limit may not exceed' + cities.length);
   }   
   if (request.query.limit > 0) {
      response.json(cities.slice(0, request.query.limit));
   } else {   
      response.json(Object.keys(cities));
   }
});

app.get('/cities/:name', function(request,response) {
   // var name = request.params.name;
   // var city = name[0].toUpperCase() + name.slice(1).toLowerCase();
   var state = cities[request.cityName];
   if (!state) {
      response.status(404).json('City not found!');
   } else {
      response.json(state);
   }
});

app.listen(process.env.PORT);