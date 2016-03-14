module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var chat = require('../../models/chat.js');

// Read All
app.get('/api/chats', function(req, res) {
    chat.findAll(function(data) {
      res.status(200).json(data);
    });
});



// Create
app.post('/api/chats', function(req, res) {
    chat.add(req.body, function(doc){
        res.send(doc);
    });
});

return app;
};