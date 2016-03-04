module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var song = require('../../models/song.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

// Read All
app.get('/api/songs', function(req, res) {
    song.findAll(function(data) {
      res.status(200).json(data);
    });
});

// Create
app.post('/api/songs', function(req, res) {
    song.add(req.body, function(doc){
        res.send(doc);
    });
});

 // Read One
app.get('/api/songs/:id', function(req, res) {
    objectId = req.params.id;
    song.findOne({_id:objectId},function(doc) {
            res.status(200).json(doc);
    });
});

// Update
app.post('/api/songs/:id', function(req, res) {
    objectId = req.params.id;
    console.log("in api", objectId);
    song.update(req.body,function(doc){
      console.log("in api data",doc);
      res.status(200).json(doc);
    });
});


// Delete One
app.delete('/api/songs/:id', function(req, res) {
    req.body.id = req.params.id;
    song.remove(req.body,function(err){
      // Error Encountered
      res.status(500).json(err);
    },function(data) {
      res.status(200).json({success:data});
    });
});



return app;
};