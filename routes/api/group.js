module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var group = require('../../models/group.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

// Read All
app.get('/api/groups', function(req, res) {
    group.findAll(function(data) {
      res.status(200).json(data);
    });
});

// Read One
app.get('/api/groups/:id', function(req, res) {
    objectId = req.params.id;
    group.findOne({_id:objectId},function(doc) {
            res.status(200).json(doc);
    });
});

// Delete One
app.delete('/api/groups/:id', function(req, res) {
    objectId = req.params.id;
    group.remove({_id:objectId},function(doc){
        res.status(200).json("doc in api",doc);
    });
});


return app;
};