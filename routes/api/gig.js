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


return app;
};