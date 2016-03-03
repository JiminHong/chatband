module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var Gig = require('../models/gig.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

app.get('/getGigs', function(req, res){
    Gig.findAll(function(result){
        console.log(result);
        //res.send(result);
    })
});

app.post('/addGigJSON', function (req, res) {
    gigs = require('../models/gig.js');
    gigs.add(req.body, function(doc){
        res.send(doc);
    });
});

app.post('/addSongJSON', function (req, res) {
    songs = require('../models/song.js');
    songs.add(req.body, function(doc){
        res.send(doc);
        console.log(doc);
    });
});

app.post('/addLineupJSON', function (req, res) {
    lineups = require('../models/lineup.js');
    lineups.add(req.body, function(doc){
        res.send(doc);
        console.log(doc);
    });
});

app.post('/addDatetimeJSON', function (req, res) {
    lineups = require('../models/lineup.js');
    lineups.add(req.body, function(doc){
        res.send(doc);
        console.log(doc);
    });
});

app.post('/addLocationJSON', function (req, res) {
    lineups = require('../models/lineup.js');
    lineups.add(req.body, function(doc){
        res.send(doc);
        console.log(doc);
    });
});

app.post('/addWardrobeJSON', function (req, res) {
    lineups = require('../models/lineup.js');
    lineups.add(req.body, function(doc){
        res.send(doc);
        console.log(doc);
    });
});


};