module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var gig = require('../../models/gig.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================
// Read All
app.get('/api/gig/:groupId', function(req, res) {
    group_id = req.params.groupId;
    gig.findAll({'group_id':group_id},function(data) {
      res.status(200).json(data);
    });
});

// Create
app.post('/api/gig/:groupId', function(req, res) {
    group_id = req.params.groupId;
    gig.add(group_id, req.body, function(doc){
        res.send(doc);
    });
});

 // Read One
app.get('/api/gig/:groupId/:gigId', function(req, res) {
    gig_id = req.params.gigId;
    gig.findOne({_id:gig_id},function(doc) {
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