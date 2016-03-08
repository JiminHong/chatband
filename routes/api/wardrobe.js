module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var wardrobe = require('../../models/wardrobe.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

// Read All
app.get('/api/wardrobes', function(req, res) {
    wardrobe.findAll(function(data) {
      res.status(200).json(data);
    });
});

// Create
app.post('/api/wardrobes', function(req, res) {
    wardrobe.add(req.body, function(doc){
        res.send(doc);
    });
});

 // Read One
app.get('/api/wardrobes/:id', function(req, res) {
    objectId = req.params.id;
    wardrobe.findOne({_id:objectId},function(doc) {
            res.status(200).json(doc);
    });
});

// Update
app.post('/api/wardrobes/:id', function(req, res) {
    objectId = req.params.id;
    console.log("in api", objectId);
    wardrobe.update(req.body,function(doc){
      console.log("in api data",doc);
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