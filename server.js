var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var mongoose   = require('mongoose');
db = require('./config/db');

const util = require('util')

var app = express();
app.set('port', (process.env.PORT || 5000));



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});




// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/'));

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}


var viner = require('./app/routes/viner.js');
app.use('/api/viner', viner);

var counters = require('./app/routes/counters.js');
app.use('/api/counters', counters);

app.get('/', function(req, res) {
  res.send("Välkommen till hvin!");
});

//DB API
app.route('/api/db/collections')
.get(function(req, res) {
//app.get('/api/db/collections',function(req,res) {
  db.listCollections().toArray(function(err, collInfos) {
    res.json(collInfos);
  });
});
app.route('/api/db/collections/:name')
.get(function(req, res) {
//app.get('/api/db/collections/:name',function(req,res){
  db.collection(req.params.name).find({}).limit(20).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get collection");
    } else {
      res.status(200).json(docs);
    }
  });
});
