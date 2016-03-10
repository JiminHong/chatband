module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var location = require('../../models/location.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

// Read All
app.get('/api/locations', function(req, res) {
    location.findAll(function(data) {
      res.status(200).json(data);
    });
});

// Create
app.post('/api/locations', function(req, res) {
    location.add(req.body, function(doc){
        res.send(doc);
    });
});

 // Read One
app.get('/api/locations/:id', function(req, res) {
    objectId = req.params.id;
    location.findOne({_id:objectId},function(doc) {
            res.status(200).json(doc);
    });
});

// Update
app.post('/api/locations/:id', function(req, res) {
    objectId = req.params.id;
    location.update(req.body,function(doc){
      res.status(200).json(doc);
    });
});


// Delete One
app.delete('/api/locations/:id', function(req, res) {
    objectId = req.params.id;
    location.remove({_id:objectId},function(doc){
        res.status(200).json("doc in api",doc);
    });
});


return app;
};