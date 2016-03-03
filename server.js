// server.js
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
// modules =================================================
var express        = require('express');
var app            = express();
var router         = express.Router();
var mongoose       = require('mongoose');
var morgan         = require('morgan');  
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var fs             = require('fs');


//load all files in models dir
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});

// configuration ===========================================
    
// config files
var db = require('./config/db');

var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       
  
mongoose.connect(db.url, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});


// set our port
var port = process.env.PORT || 3000; 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 

// ===================================================================
// =============================== Gigs ==============================
// ===================================================================


// app.get('/api/gigs', function(req, res) {

//     mongoose.model('gig').find(function(err, gigs) {
//         if (err)
//             res.send(err)
//         res.json(gigs); 
//     });
// });


// // ===================================================================
// // =============================== Songs =============================
// // ===================================================================
// app.get('/api/songs', function(req, res) {

//     mongoose.model('song').find(function(err, songs) {
//         if (err)
//             res.send(err)
//         res.json(songs); 
//     });
// });

// // app.get('/api/songs/:song_id', function(req, res){
// //     _id : req.params.song_id;
// //     mongoose.model('song').findOne({_id:req.params.song_id}, function(err, songs){
// //         res.json(songs);
// //     });
// // });

// // app.post('/api/songs/:song_id', function(req, res){
// //     mongoose.model('song').findOneAndUpdate(
// //         {_id: req.params.song_id},
// //         {$set: {
// //             artist  : req.body.artist,
// //             title   : req.body.title,
// //             songDuration   : req.body.songDuration,
// //             bpm    : req.body.bpm
// //             }
// //         },
// //         {udpset: true}
// //         , function(err, songs){
// //         if(err){
// //             console.log("something wrong");
// //         }else{
// //             console.log(songs);
// //             res.send(204);
// //         }
// //     });
// // });

// // app.delete('/api/songs/:song_id', function(req, res) {
// //     mongoose.model('song').remove({
// //         _id : req.params.song_id
// //     }, function(err, song) {
// //         if (err)
// //             res.send(err);

// //         mongoose.model('song').find(function(err, songs) {
// //             if (err)
// //                 res.send(err)
// //             res.json(songs);
// //         });
// //     });
// // });


// // ===================================================================
// // ============================ Lineups ==============================
// // ===================================================================
// app.get('/api/lineups', function(req, res) {

//     mongoose.model('lineup').find(function(err, lineups) {
//         if (err)
//             res.send(err)
//         res.json(lineups); 
//     });
// });

// // app.get('/api/lineups/:lineup_id', function(req, res){
// //     _id : req.params.lineup_id;
// //     mongoose.model('lineup').findOne({_id:req.params.lineup_id}, function(err, lineups){
// //         res.json(lineups);
// //     });
// // });

// // app.post('/api/lineups/:lineup_id', function(req, res){
// //     mongoose.model('lineup').findOneAndUpdate(
// //         {_id: req.params.lineup_id},
// //         {$set: {
// //             instrumentation: req.body.instrumentation,
// //             firstName: req.body.firstName,
// //             lastName: req.body.lastName,
// //             comment: req.body.comment
// //             }
// //         },
// //         {udpset: true}
// //         , function(err, lineups){
// //         if(err){
// //             console.log("something wrong");
// //         }else{
// //             console.log(lineups);
// //             res.send(204);
// //         }
// //     });
// // });

// // app.delete('/api/lineups/:lineup_id', function(req, res) {
// //     mongoose.model('lineup').remove({
// //         _id : req.params.lineup_id
// //     }, function(err, song) {
// //         if (err)
// //             res.send(err);

// //         mongoose.model('lineup').find(function(err, lineups) {
// //             if (err)
// //                 res.send(err)
// //             res.json(lineups);
// //         });
// //     });
// // });



// // ===================================================================
// // =========================== Date.Time =============================
// // ===================================================================

// app.get('/api/datetimes', function(req, res) {

//     mongoose.model('datetime').find(function(err, datetimes) {
//         if (err)
//             res.send(err)
//         res.json(datetimes); 
//     });
// });


// // app.get('/api/datetimes/:datetime_id', function(req, res){
// //     _id : req.params.datetime_id;
// //     mongoose.model('datetime').findOne({_id:req.params.datetime_id}, function(err, datetimes){
// //         res.json(datetimes);
// //     });
// // });

// // app.post('/api/datetimes/:datetime_id', function(req, res){
// //     mongoose.model('datetime').findOneAndUpdate(
// //         {_id: req.params.datetime_id},
// //         {$set: {
// //             scheduleName: req.body.scheduleName,
// //             date: req.body.date,
// //             time: req.body.time,
// //             }
// //         },
// //         {udpset: true}
// //         , function(err, datetimes){
// //         if(err){
// //             console.log("something wrong");
// //         }else{
// //             console.log(datetimes);
// //             res.send(204);
// //         }
// //     });
// // });

// // app.delete('/api/datetimes/:datetime_id', function(req, res) {
// //     mongoose.model('datetime').remove({
// //         _id : req.params.datetime_id
// //     }, function(err, datetimes) {
// //         if (err)
// //             res.send(err);

// //         mongoose.model('datetime').find(function(err, datetimes) {
// //             if (err)
// //                 res.send(err)
// //             res.json(datetimes);
// //         });
// //     });
// // });

// // ===================================================================
// // =========================== Location ==============================
// // ===================================================================

// app.get('/api/locations', function(req, res) {

//     mongoose.model('location').find(function(err, locations) {
//         if (err)
//             res.send(err)
//         res.json(locations); 
//     });
// });


// // });
// // app.get('/api/locations/:location_id', function(req, res){
// //     _id : req.params.location_id;
// //     mongoose.model('location').findOne({_id:req.params.location_id}, function(err, locations){
// //         res.json(locations);
// //     });
// // });

// // app.post('/api/locations/:location_id', function(req, res){
// //     mongoose.model('location').findOneAndUpdate(
// //         {_id: req.params.location_id},
// //         {$set: {
// //             scheduleName: req.body.scheduleName,
// //             date: req.body.date,
// //             time: req.body.time,
// //             }
// //         },
// //         {udpset: true}
// //         , function(err, locations){
// //         if(err){
// //             console.log("something wrong");
// //         }else{
// //             console.log(location);
// //             res.send(204);
// //         }
// //     });
// // });

// // app.delete('/api/locations/:location_id', function(req, res) {
// //     mongoose.model('location').remove({
// //         _id : req.params.location_id
// //     }, function(err, locations) {
// //         if (err)
// //             res.send(err);

// //         mongoose.model('location').find(function(err, locations) {
// //             if (err)
// //                 res.send(err)
// //             res.json(locations);
// //         });
// //     });
// // });

// // ===================================================================
// // =========================== Wardrobe ==============================
// // ===================================================================

// app.get('/api/wardrobes', function(req, res) {

//     mongoose.model('wardrobe').find(function(err, wardrobes) {
//         if (err)
//             res.send(err)
//         res.json(wardrobes); 
//     });
// });



// app.get('/api/wardrobes/:wardrobe_id', function(req, res){
//     _id : req.params.wardrobe_id;
//     mongoose.model('wardrobe').findOne({_id:req.params.wardrobe_id}, function(err, wardrobes){
//         res.json(wardrobes);
//     });
// });

// app.post('/api/wardrobes/:wardrobe_id', function(req, res){
//     mongoose.model('wardrobe').findOneAndUpdate(
//         {_id: req.params.wardrobe_id},
//         {$set: {
//             instrumentation: req.body.instrumentation,
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             comment: req.body.comment
//             }
//         },
//         {udpset: true}
//         , function(err, wardrobes){
//         if(err){
//             console.log("something wrong");
//         }else{
//             console.log(wardrobes);
//             res.send(204);
//         }
//     });
// });

// app.delete('/api/wardrobes/:wardrobe_id', function(req, res) {
//     mongoose.model('wardrobe').remove({
//         _id : req.params.wardrobe_id
//     }, function(err, song) {
//         if (err)
//             res.send(err);

//         mongoose.model('wardrobe').find(function(err, wardrobes) {
//             if (err)
//                 res.send(err)
//             res.json(wardrobes);
//         });
//     });
// });


// ===================================================================
// ============================ route ================================
// ===================================================================


router.get('/', function(req, res) {
  res.json({ message: 'You are running router.get!' });
});

app.get('/', function(req, res) {
    res.sendfile('./public/index.html'); // load our public/index.html file
});

require('./routes/api/gig.js')(app);

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;  


