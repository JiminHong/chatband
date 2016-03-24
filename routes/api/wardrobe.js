module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var wardrobe = require('../../models/wardrobe.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

// Read All
app.get('/api/wardrobes/:groupId/:gigId', function(req, res) {
    group_id = req.params.groupId;
    gig_id = req.params.gigId;
    wardrobe.findAll({'gig_id':gig_id}, function(data) {
      res.status(200).json(data);
    });
});

// Create
app.post('/api/wardrobes/:gigId', function(req, res) {
    gig_id = req.params.gigId;
    wardrobe.add(gig_id, req.body, function(doc){
        res.send(doc);
    });
});

 // Read One
app.get('/api/wardrobes/:groupId/:gigId/:id', function(req, res) {
    objectId = req.params.id;
    wardrobe.findOne({_id:objectId},function(doc) {
            res.status(200).json(doc);
    });
});

// Update
app.post('/api/wardrobes/:id', function(req, res) {
    objectId = req.params.id;
    wardrobe.update(req.body,function(doc){
      res.status(200).json(doc);
    });
});


// Delete One
app.delete('/api/wardrobes/:id', function(req, res) {
    objectId = req.params.id;
    wardrobe.remove({_id:objectId},function(doc){
        res.status(200).json("doc in api",doc);
    });
});


return app;
};