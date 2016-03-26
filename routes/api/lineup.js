module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var lineup = require('../../models/lineup.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

// Read All with gig_id
app.get('/api/lineups/:groupId/:gigId', function(req, res) {
    group_id = req.params.groupId;
    gig_id = req.params.gigId;
    lineup.findAll({'gig_id':gig_id}, function(data) {
      res.status(200).json(data);
    });
});

// Create
app.post('/api/lineups/:gigId', function(req, res) {
    gig_id = req.params.gigId;
    lineup.add(gig_id, req.body, function(doc){
        res.send(doc);
    });
});

 // Read One
app.get('/api/lineups/:groupId/:gigId/:id', function(req, res) {
    objectId = req.params.id;
    lineup.findOne({_id:objectId},function(doc) {
            res.status(200).json(doc);
    });
});

// Update
app.post('/api/lineups/:groupId/:gigId/:id', function(req, res) {
    objectId = req.params.id;
    lineup.update(req.body,function(doc){
      res.status(200).json(doc);
    });
});


// Delete One
app.delete('/api/lineups/:groupId/:gigId/:id', function(req, res) {
    objectId = req.params.id;
    lineup.remove({_id:objectId},function(doc){
        res.status(200).json("doc in api",doc);
    });
});


return app;
};