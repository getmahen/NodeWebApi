//Entry point into the App

var express = require('express');
var bodyParser = require('body-parser');//FOR PARSING REQUEST body

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/customers', function(error, db){
    if(error){

    }
    else{

    }
});

var port = process.env.PORT || '5000';

var app = new express();
var customerRoutes = require('./src/routes/customerroute.js')(express);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//ROUTES
app.use('/customers', customerRoutes);

app.get('/', function(request, response){
    response.send("Hello there!");
});

app.listen(port, function(error){
    if(error){
        console.log('Error configuring Node Server');
    }

    console.log('Node Server listening on Port: '+ port);
});