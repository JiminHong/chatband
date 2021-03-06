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
// Create
app.post('/api/groups', function(req, res) {
    group.add(req.body, function(doc){
        res.send(doc);
    });
});

 // Read One
app.get('/api/groups/:groupId', function(req, res) {
    group_id = req.params.groupId;
    group.findOne({_id:group_id},function(doc) {
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