var express        = require('express');
var app            = express();

// ===================================================================
// =========================== Location ==============================
// ===================================================================

app.get('/api/locations', function(req, res) {

    mongoose.model('location').find(function(err, locations) {
        if (err)
            res.send(err)
        res.json(locations); 
    });
});

app.post('/api/locations', function(req, res) {

    mongoose.model('location').create({
        gigAddress  : req.body.gigAddress
    }, function(err, song) {
        if (err)
            res.send(err);

        mongoose.model('location').find(function(err, locations) {
            if (err)
                res.send(err)
            res.json(locations);
        });
    });

});

app.get('/api/locations/:location_id', function(req, res){
    _id : req.params.location_id;
    mongoose.model('location').findOne({_id:req.params.location_id}, function(err, locations){
        res.json(locations);
    });
});

app.post('/api/locations/:location_id', function(req, res){
    mongoose.model('location').findOneAndUpdate(
        {_id: req.params.location_id},
        {$set: {
            gigAddress: req.body.gigAddress
            }
        },
        {udpset: true}
        , function(err, locations){
        if(err){
            console.log("something wrong");
        }else{
            console.log(locations);
            res.send(204);
        }
    });
});

app.delete('/api/locations/:location_id', function(req, res) {
    mongoose.model('location').remove({
        _id : req.params.location_id
    }, function(err, song) {
        if (err)
            res.send(err);

        mongoose.model('location').find(function(err, locations) {
            if (err)
                res.send(err)
            res.json(locations);
        });
    });
});



