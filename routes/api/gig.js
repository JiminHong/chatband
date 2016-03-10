module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var gig = require('../../models/gig.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

// Read All
app.get('/api/gig', function(req, res) {
    gig.findAll(function(data) {
      res.status(200).json(data);
    });
});

// Create
app.post('/api/gig', function(req, res) {
    gig.add(req.body, function(doc){
        res.send(doc);
    });
});

 // Read One
app.get('/api/gig/:id', function(req, res) {
    objectId = req.params.id;
    gig.findOne({_id:objectId},function(doc) {
            res.status(200).json(doc);
    });
});

// Update
app.post('/api/gig/:id', function(req, res) {
    objectId = req.params.id;
    gig.update(req.body,function(doc){
      res.status(200).json(doc);
    });
});


// Delete One
app.delete('/api/gig/:id', function(req, res) {
    objectId = req.params.id;
    gig.remove({_id:objectId},function(doc){
        res.status(200).json(doc);
    });
});

return app;
};