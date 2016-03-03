var express        = require('express');
var app            = express();

// ===================================================================
// =========================== Wardrobe ==============================
// ===================================================================

app.get('/api/wardrobes', function(req, res) {

    mongoose.model('wardrobe').find(function(err, wardrobes) {
        if (err)
            res.send(err)
        res.json(wardrobes); 
    });
});

app.post('/api/wardrobes', function(req, res) {

    mongoose.model('wardrobe').create({
        wardrobeConcept: req.body.wardrobeConcept,
        comment : req.body.comment,
        wardrobeImg: req.body.wardrobeImg
    }, function(err, song) {
        if (err)
            res.send(err);

        mongoose.model('wardrobe').find(function(err, wardrobes) {
            if (err)
                res.send(err)
            res.json(wardrobes);
        });
    });

});

app.get('/api/wardrobes/:wardrobe_id', function(req, res){
    _id : req.params.wardrobe_id;
    mongoose.model('wardrobe').findOne({_id:req.params.wardrobe_id}, function(err, wardrobes){
        res.json(wardrobes);
    });
});

app.post('/api/wardrobes/:wardrobe_id', function(req, res){
    mongoose.model('wardrobe').findOneAndUpdate(
        {_id: req.params.wardrobe_id},
        {$set: {
            wardrobeConcept: req.body.wardrobeConcept,
            comment : req.body.comment,
            wardrobeImg: req.body.wardrobeImg
            }
        },
        {udpset: true}
        , function(err, wardrobes){
        if(err){
            console.log("something wrong");
        }else{
            console.log(wardrobes);
            res.send(204);
        }
    });
});

app.delete('/api/wardrobes/:wardrobe_id', function(req, res) {
    mongoose.model('wardrobe').remove({
        _id : req.params.wardrobe_id
    }, function(err, song) {
        if (err)
            res.send(err);

        mongoose.model('wardrobe').find(function(err, wardrobes) {
            if (err)
                res.send(err)
            res.json(wardrobes);
        });
    });
});