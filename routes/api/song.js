module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var song = require('../../models/song.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

// Read All
app.get('/api/songs', function(req, res) {
    song.findAll(function(data) {
      res.status(200).json(data);
    });
});

// Create
app.post('/api/songs', function(req, res) {
    song.add(req.body, function(doc){
        res.send(doc);
    });
});

 // Read One
app.get('/api/songs/:id', function(req, res) {
    objectId = req.params.id;
    song.findOne({_id:objectId},function(doc) {
        console.log("in api doc ",doc);

            res.status(200).json(doc);
            console.log("DOC in api/song.js :::::::::::::::::::: ",doc)
    });
});

    // _findOne = function(id ,success, fail){
    //     objectId = 'ObjectId("'+id+'")';
    //     _model.findOne({'id': objectId}, function(err, doc){
    //         if(err){
    //             console.log(err);
    //         }else{
    //             success(doc);
    //         }
    //     })
    // };




// Update
app.put('api/songs/:id', function(req, res) {
    req.body.id = req.params.id;
    song.update(req.body,function(err){
      // Error Encountered
      res.status(500).json(err);
    },function(data) {
      res.status(200).json(data);
    });
});

// Delete One
app.delete('api/songs/:id', function(req, res) {
    req.body.id = req.params.id;
    song.remove(req.body,function(err){
      // Error Encountered
      res.status(500).json(err);
    },function(data) {
      res.status(200).json({success:data});
    });
});



return app;
};