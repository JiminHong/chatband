// server.js

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// modules =================================================
var express        = require('express');
var app            = express('./config/express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');


// configuration ===========================================
var config 		= require('./config/config');
var mongoose 	= require('./config/mongoose');

// mongoose.connect('mongodb://jhong:jhong@ds055525.mongolab.com:55545/heroku_sf66wt12');
    
// config files
var db = mongoose();
var app = express();

// set our port
var port = process.env.PORT || 3000; 


// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url); 
// mongoose.connect('mongodb://jhong:jhong@ds055525.mongolab.com:55545/heroku_sf66wt12');


// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

app.get('/songslist', function(req, res) {
	console.log("I received the GET request")
})

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(config.port);

module.exports = app;            

// shoutout to the user                     
console.log('Magic happens on port ' + config.port);

// expose app           
exports = module.exports = app;                         
