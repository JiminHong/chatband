// server.js
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
// modules =================================================
var express        = require('express');
var app            = express();
var router         = express.Router();
var mongoose	   = require('mongoose');
var morgan         = require('morgan');  
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var fs             = require('fs');


//load all files in models dir
fs.readdirSync(__dirname + '/app/models').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/app/models/' + filename)
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
// app.use('/api', router);

// routes ==================================================

// ===================================================================
// ============================== Groups =============================
// ===================================================================
app.get('/api/groups', function(req, res) {

    mongoose.model('group').find(function(err, groups) {
        if (err)
            res.send(err)
        res.json(groups); 
    });
});

app.post('/api/groups', function(req, res) {

    mongoose.model('group').create({
        groupName        : req.body.groupName,
        lastMessage      : req.body.lastMessage,
        lastMessageTime  : req.body.lastMessageTime,
        groupPic         : req.body.groupPic
    }, function(err, group) {
        if (err)
            res.send(err);

        mongoose.model('group').find(function(err, groups) {
            if (err)
                res.send(err)
            res.json(groups);
        });
    });

});


app.delete('/api/groups/:group_id', function(req, res) {
    mongoose.model('group').remove({
        _id : req.params.group_id
    }, function(err, group) {
        if (err)
            res.send(err);

        mongoose.model('group').find(function(err, groups) {
            if (err)
                res.send(err)
            res.json(groups);
        });
    });
});


// ===================================================================
// =============================== Chats =============================
// ===================================================================
app.get('/api/chats', function(req, res) {

    mongoose.model('chat').find(function(err, chats) {
        if (err)
            res.send(err)
        res.json(chats); 
    });
});

app.post('/api/chats', function(req, res) {

    mongoose.model('chat').create({
        groupName  : req.body.groupName,
        groupAdmin   : req.body.groupAdmin,
        groupMembers    : req.body.groupMembers,
        groupGigs     : req.body.groupGigs
    }, function(err, chat) {
        if (err)
            res.send(err);

        mongoose.model('chat').find(function(err, chats) {
            if (err)
                res.send(err)
            res.json(chats);
        });
    });

});


app.delete('/api/chats/:chat_id', function(req, res) {
    mongoose.model('chat').remove({
        _id : req.params.chat_id
    }, function(err, chat) {
        if (err)
            res.send(err);

        mongoose.model('chat').find(function(err, chats) {
            if (err)
                res.send(err)
            res.json(chats);
        });
    });
});


// ===================================================================
// =============================== Songs =============================
// ===================================================================
app.get('/api/songs', function(req, res) {

    mongoose.model('song').find(function(err, songs) {
        if (err)
            res.send(err)
        res.json(songs); 
    });
});

app.post('/api/songs', function(req, res) {

    mongoose.model('song').create({
        artist  : req.body.artist,
        title   : req.body.title,
        time    : req.body.time,
        bpm     : req.body.bpm,
        done    : false
    }, function(err, song) {
        if (err)
            res.send(err);

        mongoose.model('song').find(function(err, songs) {
            if (err)
                res.send(err)
            res.json(songs);
        });
    });

});


app.delete('/api/songs/:song_id', function(req, res) {
    mongoose.model('song').remove({
        _id : req.params.song_id
    }, function(err, song) {
        if (err)
            res.send(err);

        mongoose.model('song').find(function(err, songs) {
            if (err)
                res.send(err)
            res.json(songs);
        });
    });
});


// ===================================================================
// ============================ Lineups ==============================
// ===================================================================
app.get('/api/lineups', function(req, res) {

    mongoose.model('lineup').find(function(err, lineups) {
        if (err)
            res.send(err)
        res.json(lineups); 
    });
});

app.post('/api/lineups', function(req, res) {

    mongoose.model('lineup').create({
        instrumentation  : req.body.instrumentation,
        name   : req.body.name,
        comment    : req.body.comment
    }, function(err, song) {
        if (err)
            res.send(err);

        mongoose.model('lineup').find(function(err, lineups) {
            if (err)
                res.send(err)
            res.json(lineups);
        });
    });

});


app.delete('/api/lineups/:lineup_id', function(req, res) {
    mongoose.model('lineup').remove({
        _id : req.params.lineup_id
    }, function(err, song) {
        if (err)
            res.send(err);

        mongoose.model('lineup').find(function(err, lineups) {
            if (err)
                res.send(err)
            res.json(lineups);
        });
    });
});

// ===================================================================
// =========================== Location ==============================
// ===================================================================

app.get('/api/locations', function(req, res) {
    mongoose.model('location').find(function(err, locations) {
        res.send(locations)
    })
})


app.post('/api/locations', function(req, res) {

    mongoose.model('location').create({
        street  : req.body.street,
        city    : req.body.city,
        state   : req.body.state,
        zipcode : req.body.zipcode
    }, function(err, location) {
        if (err)
            res.send(err);

        mongoose.model('location').find(function(err, locations) {
            if (err)
                res.send(err)
            res.json(locations);
        });
    });
});

router.get('*', function(req, res) {
  res.json({ message: 'You are running router.get!' });
});

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;  




