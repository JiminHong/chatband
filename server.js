// // server.js
// process.env.NODE_ENV = process.env.NODE_ENV || 'production';
// // modules =================================================
var express        = require('express');

var app            = express();
var http           = require('http').createServer(app);

var io             = require('socket.io')(http);
var router         = express.Router();
var mongoose       = require('mongoose');
var morgan         = require('morgan');  
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var fs             = require('fs');


// //load all files in models dir
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});

// // configuration ===========================================
    
// // config files
var db = require('./config/db');

var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       
  
mongoose.connect(db.url, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  console.log("Data connected!");                         
});


// // set our port
var port = process.env.PORT || 3000; 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 


// // ===================================================================
// // ============================ route ================================
// // ===================================================================


router.get('/', function(req, res) {
  res.json({ message: 'You are running router.get!' });
});

app.get('/', function(req, res){
  res.sendfile('./public/index.html');
});

// //Integrating Socket IO
io.on('connection', function(socket){
  console.log('a user connected');
});

// // Require all APIs
fs.readdirSync(__dirname + '/routes/api').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/routes/api/' + filename)(app)
});

// // start app ===============================================
http.listen(port, function(){
  console.log('listening on '+port);
});               

// // expose app           
exports = module.exports = http;  





