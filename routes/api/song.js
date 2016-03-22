module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var song = require('../../models/song.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

// Read All with gig_id
app.get('/api/songs/:gigId', function(req, res) {
    gig_id = req.params.gigId;
    song.findAll({'gig_id':gig_id},function(data) {
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
    song.update(req.body,function(doc){
      res.status(200).json(doc);
    });
});


// Delete One
app.delete('/api/songs/:id', function(req, res) {
    objectId = req.params.id;
    song.remove({_id:objectId},function(doc){
        res.status(200).json("doc in api",doc);
    });
});


return app;
};