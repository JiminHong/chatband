module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var group = require('../../models/user.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

// Read All
app.get('/api/users', function(req, res) {
    group.findAll(function(data) {
      res.status(200).json(data);
    });
});

// Read One
app.get('/api/users/:id', function(req, res) {
    objectId = req.params.id;
    group.findOne({_id:objectId},function(doc) {
            res.status(200).json(doc);
    });
});

// Create
app.post('/api/users', function(req, res) {
    group.add(req.body, function(doc){
        res.send(doc);
    });
});

// Delete One
app.delete('/api/users/:id', function(req, res) {
    objectId = req.params.id;
    group.remove({_id:objectId},function(doc){
        res.status(200).json("doc in api",doc);
    });
});

app.post('/api/users/:id', function(req, res) {
    objectId = req.params.id;
    
    group.update(req.body,function(doc){
      res.status(200).json(doc);
    });
});



return app;
};