module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var file = require('../../models/file.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

// Read All
app.get('/api/files', function(req, res) {
    file.findAll(function(data) {
      res.status(200).json(data);
    });
});

return app;
};