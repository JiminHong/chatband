var express        = require('express');
var app            = express();

// ===================================================================
// ============================ Lineups ==============================
// ===================================================================
app.get('/api/lineups', function(req, res) {

    mongoose.model('lineup').find(function(err, lineups) {
        if (err)
            res.send(err)
        res.json(lineups); 
    });
});

app.post('/api/lineups', function(req, res) {

    mongoose.model('lineup').create({
        instrumentation  : req.body.instrumentation,
        firstName   : req.body.firstName,
        lastName   : req.body.lastName,
        comment    : req.body.comment
    }, function(err, song) {
        if (err)
            res.send(err);

        mongoose.model('lineup').find(function(err, lineups) {
            if (err)
                res.send(err)
            res.json(lineups);
        });
    });

});

app.get('/api/lineups/:lineup_id', function(req, res){
    _id : req.params.lineup_id;
    mongoose.model('lineup').findOne({_id:req.params.lineup_id}, function(err, lineups){
        res.json(lineups);
    });
});

app.post('/api/lineups/:lineup_id', function(req, res){
    mongoose.model('lineup').findOneAndUpdate(
        {_id: req.params.lineup_id},
        {$set: {
            instrumentation: req.body.instrumentation,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            comment: req.body.comment
            }
        },
        {udpset: true}
        , function(err, lineups){
        if(err){
            console.log("something wrong");
        }else{
            console.log(lineups);
            res.send(204);
        }
    });
});

app.delete('/api/lineups/:lineup_id', function(req, res) {
    mongoose.model('lineup').remove({
        _id : req.params.lineup_id
    }, function(err, song) {
        if (err)
            res.send(err);

        mongoose.model('lineup').find(function(err, lineups) {
            if (err)
                res.send(err)
            res.json(lineups);
        });
    });
});



