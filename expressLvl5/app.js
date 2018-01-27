var express = require('express');
var app = express();
var city = require('./routes/cities');

app.use(express.static('public'));

app.use('/cities', city);
   
app.listen(process.env.PORT);