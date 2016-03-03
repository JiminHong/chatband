var express        = require('express');
var app            = express();

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

app.get('/api/songs/:gigId', function(req, res) {
    mongoose.model('song').find({
        gigId: req.params.gigId
    }, function(err, songs){
        if (err){
            res.send(err)
        }else{
            res.json(songs);
        }
    });
});

app.post('/api/songs/:id', function(req, res) {
    mongoose.model('song').create({
        gigId: req.params.id,
        artist  : req.body.artist,
        title   : req.body.title,
        songDuration    : req.body.songDuration,
        bpm     : req.body.bpm,
        done    : false
    }, function(err, songs){
        if (err){
            res.send(err)
        }else{
            res.json(songs);
        }
    });
});

app.post('/api/songs', function(req, res) {
    mongoose.model('song').create({
        artist  : req.body.artist,
        title   : req.body.title,
        songDuration    : req.body.songDuration,
        bpm     : req.body.bpm,
        done    : false
    }, function(err, songs) {
        if (err)
            res.send(err);

        mongoose.model('song').find(function(err, songs) {
            if (err)
                res.send(err)
            res.json(songss);
        });
    });

});


app.delete('/api/songs/:song_id', function(req, res) {
    mongoose.model('song').remove({
        _id : req.params.song_id
    }, function(err, songs) {
        if (err)
            res.send(err);

        mongoose.model('song').find(function(err, songs) {
            if (err)
                res.send(err)
            res.json(songs);
        });
    });
});

