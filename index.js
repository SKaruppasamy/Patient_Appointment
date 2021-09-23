var express=require('express');

var bodyParser=require('body-parser');

var mongoose=require('mongoose');
var app=new express();

var apiRoutes = require("./Routes/routes.js")

var mongodb = require('./Config/MongoConfig.js');

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(bodyParser.json());

const mongo = mongoose.connect(mongodb.url);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
});
var db=mongoose.connection;


if (!db)
console.log("Error connecting db");
else
console.log("DB Connected Successfully");

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Welcome to Patient Appointment'));

app.use('/api', apiRoutes)


app.listen(port, function() {
    console.log("Running Appointment on Port "+ port);
});

module.exports = app;