// server.js
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
// modules =================================================
var express        = require('express');
var app            = express();
var mongoose	   = require('mongoose');
var morgan         = require('morgan');  
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// define model ==================================================
//NOT WORKING
// var Song = require('./app/models/song.js');
var Song = mongoose.model('Song', {
    artist  : String,
    title   : String,
    time    : String,
    bpm     : Number
});


// var Lineup = require('./app/models/lineup.js');

// //Test saving
// var drummer = new Lineup({
//     instrumentation : 'ins1',
//     name            : 'name1',
//     comment         : 'com1'
// });

// drummer.save(function(err) {
//     if (err) throw err;

//     console.log("added lineup successfully");
// })


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

// routes ==================================================
// require('./app/routes')(app); // configure our routes

	// api ---------------------------------------------------------------------
    // get all songs
    app.get('/api/songs', function(req, res) {

        // use mongoose to get all songs in the database
        Song.find(function(err, songs) {
            if (err)
                res.send(err)
            res.json(songs); 
        });
    });

    // create todo and send back all songs after creation
    app.post('/api/songs', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Song.create({
            artist  : req.body.artist,
            title   : req.body.title,
            time    : req.body.time,
            bpm     : req.body.bpm,
            done    : false
        }, function(err, song) {
            if (err)
                res.send(err);

            // get and return all the songs after you create another
            Song.find(function(err, songs) {
                if (err)
                    res.send(err)
                res.json(songs);
            });
        });

    });

    // delete a todo
    // app.delete('/api/songs/:song_id', function(req, res) {
    //     Song.remove({
    //         _id : req.params.song_id
    //     }, function(err, song) {
    //         if (err)
    //             res.send(err);

    //         // get and return all the songs after you create another
    //         Song.find(function(err, songs) {
    //             if (err)
    //                 res.send(err)
    //             res.json(songs);
    //         });
    //     });
    // });


app.get('*', function(req, res) {
    res.sendfile('./public/views/gigTabs/songs.html'); 
});


// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;  




