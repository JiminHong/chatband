module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var datetime = require('../../models/datetime.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

// Read All
app.get('/api/datetimes', function(req, res) {
    datetime.findAll(function(data) {
      res.status(200).json(data);
    });
});

// Create
app.post('/api/datetimes', function(req, res) {
    datetime.add(req.body, function(doc){
        res.send(doc);
    });
});

 // Read One
app.get('/api/datetimes/:id', function(req, res) {
    objectId = req.params.id;
    datetime.findOne({_id:objectId},function(doc) {
            res.status(200).json(doc);
    });
});

// Update
app.post('/api/datetimes/:id', function(req, res) {
    objectId = req.params.id;
    datetime.update(req.body,function(doc){
      res.status(200).json(doc);
    });
});


// Delete One
app.delete('/api/datetimes/:id', function(req, res) {
    objectId = req.params.id;
    datetime.remove({_id:objectId},function(doc){
        res.status(200).json("doc in api",doc);
    });
});


return app;
};