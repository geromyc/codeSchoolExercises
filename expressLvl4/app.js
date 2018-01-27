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
   'Hartford': 'Conneticut',};
   
app.param('name', function(request, response, next){
   var name = request.params.name;
   var city = name[0].toUpperCase() + name.slice(1).toLowerCase();
   request.cityName = city;
   next();
});

app.post('/cities', parseUrlencoded, function(request, response) {
   var newCity = request.body;
   if (newCity.city.length >= 4 && newCity.state.length >= 2) {
      cities[newCity.city] = newCity.state;
      response.status(201).json(newCity.city);
   } else {
      console.log('Enter a valid city and state');
      response.status(400).json('Please enter a valid city and state');
   }
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
      response.status(400).json('City not found!');
   } else {
      response.json(state);
   }
});

app.delete('/cities/:name', function(request, response) {
   delete cities[request.cityName];
   response.status(200);
});

app.listen(process.env.PORT);