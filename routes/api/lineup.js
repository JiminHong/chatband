module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var lineup = require('../../models/lineup.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

// Read All
app.get('/api/lineups', function(req, res) {
    lineup.findAll(function(data) {
      res.status(200).json(data);
    });
});

// Create
app.post('/api/lineups', function(req, res) {
    lineup.add(req.body, function(doc){
        res.send(doc);
    });
});

 // Read One
app.get('/api/lineups/:id', function(req, res) {
    objectId = req.params.id;
    lineup.findOne({_id:objectId},function(doc) {
            res.status(200).json(doc);
    });
});

// Update
app.post('/api/lineups/:id', function(req, res) {
    objectId = req.params.id;
    console.log("in api", objectId);
    lineup.update(req.body,function(doc){
      console.log("in api data",doc);
      res.status(200).json(doc);
    });
});


// Delete One
app.delete('/api/lineups/:id', function(req, res) {
    objectId = req.params.id;
    lineup.remove({_id:objectId},function(doc){
        res.status(200).json("doc in api",doc);
    });
});


return app;
};