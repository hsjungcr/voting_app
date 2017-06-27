//Create db connection string
var db = 'mongodb://localhost:27017/fcc-voting';

//the usual list of requires
var express = require('express');
var bodyparser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var dotenv = require('dotenv');

var app = express();

var port = process.env.PORT || 3000;

//Load enviornment variables
dotenv.config({ verbose: true});

//connect to mongoose
mongoose.connect(db, function(err){
  if(err){
    console.log(err);
  }
});

mongoose.connection.on('connected', ()=>{
  console.log('Successfully opened a connection to ' +db);
});

mongoose.connection.on('disconnected'. ()=>{
  console.log('Successfully disconnected from ' + db);
});

mongoose.connection.on('error', () => {
  console.log('An error has occured connecting to ' + db);
});

app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));
app.use(express.static(__dirname + '/public'));
app.get("*", (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log('Listening on ' + port);
});

console.log(process.env.secret);
