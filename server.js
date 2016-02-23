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
app.use('/api', require('./app/modules/api.js'))
//load all files in models dir
// fs.readdirSync(__dirname + '/app/models').forEach(function(filename) {
//   if (~filename.indexOf('.js')) require(__dirname + '/app/models/' + filename)
// });

// // configuration ===========================================
    
// // config files
// var db = require('./config/db');

// var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
//                 replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       
  
// mongoose.connect(db.url, options);
// var conn = mongoose.connection;             
 
// conn.on('error', console.error.bind(console, 'connection error:'));  
 
// conn.once('open', function() {
//   // Wait for the database connection to establish, then start the app.                         
// });


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

app.put('api/songs/:song_id', function(req, res){

    var id="56c898564978391100985fd8";

    mongoose.model('song').findByIdAndUpdate(id, { $set: { artist: 'new one' }}, function (err, song) {
      if (err) return handleError(err);
      res.send(song);
    });
})

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

app.get('/api/lineups/:lineup_id', function(req, res){
    _id : req.params.lineup_id;
    mongoose.model('lineup').findOne({_id:req.params.lineup_id}, function(err, lineups){
        res.json(lineups);
    });
});

app.post('/api/lineups/:lineup_id', function(req, res){
    mongoose.model('lineup').findOneAndUpdate(
        {_id: req.params.lineup_id},
        {$set: {
            instrumentation: req.body.instrumentation,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            comment: req.body.comment
            }
        },
        {udpset: true}
        , function(err, lineups){
        if(err){
            console.log("something wrong");
        }else{
            console.log(lineups);
            res.send(204);
        }
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
// =========================== Date.Time =============================
// ===================================================================
app.get('/api/datetimes', function(req, res) {

    mongoose.model('datetime').find(function(err, datetimes) {
        if (err)
            res.send(err)
        res.json(datetimes); 
    });
});

app.post('/api/datetimes', function(req, res) {

    mongoose.model('datetime').create({
        scheduleName  : req.body.scheduleName,
        date   : req.body.date,
        time    : req.body.time
    }, function(err, datetime) {
        if (err)
            res.send(err);

        mongoose.model('datetime').find(function(err, datetimes) {
            if (err)
                res.send(err)
            res.json(datetimes);
        });
    });

});


app.delete('/api/datetimes/:datetime_id', function(req, res) {
    mongoose.model('datetime').remove({
        _id : req.params.datetime_id
    }, function(err, datetime) {
        if (err)
            res.send(err);

        mongoose.model('datetime').find(function(err, datetimes) {
            if (err)
                res.send(err)
            res.json(datetimes);
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


// ===================================================================
// =========================== Wardrobe ==============================
// ===================================================================

app.get('/api/wardrobes', function(req, res) {
    mongoose.model('wardrobe').find(function(err, wardrobes) {
        res.send(wardrobes)
    })
})


app.post('/api/wardrobes', function(req, res) {

    mongoose.model('wardrobe').create({
        wardrobeConcept    : req.body.wardrobeConcept,
        comment     : req.body.comment,
        wardrobeImg : req.body.wardrobeImg
    }, function(err, wardrobe) {
        if (err)
            res.send(err);

        mongoose.model('wardrobe').find(function(err, wardrobes) {
            if (err)
                res.send(err)
            res.json(wardrobes);
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




