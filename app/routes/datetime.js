var express        = require('express');
var app            = express();

// ===================================================================
// =========================== Date.Time =============================
// ===================================================================

app.get('/api/datetimes', function(req, res) {

    mongoose.model('datetime').find(function(err, datetimes) {
        if (err)
            res.send(err)
        res.json(datetimes); 
    });
});

app.post('/api/datetimes', function(req, res) {

    mongoose.model('datetime').create({
        scheduleName  : req.body.scheduleName,
        date   : req.body.date,
        time   : req.body.time,
    }, function(err, song) {
        if (err)
            res.send(err);

        mongoose.model('datetime').find(function(err, datetimes) {
            if (err)
                res.send(err)
            res.json(datetimes);
        });
    });

});

app.get('/api/datetimes/:datetime_id', function(req, res){
    _id : req.params.datetime_id;
    mongoose.model('datetime').findOne({_id:req.params.datetime_id}, function(err, datetimes){
        res.json(datetime);
    });
});

app.post('/api/datetimes/:datetime_id', function(req, res){
    mongoose.model('datetime').findOneAndUpdate(
        {_id: req.params.datetime_id},
        {$set: {
            scheduleName: req.body.scheduleName,
            date: req.body.date,
            time: req.body.time,
            }
        },
        {udpset: true}
        , function(err, datetimes){
        if(err){
            console.log("something wrong");
        }else{
            console.log(datetimes);
            res.send(204);
        }
    });
});

app.delete('/api/datetimes/:datetime_id', function(req, res) {
    mongoose.model('datetime').remove({
        _id : req.params.datetime_id
    }, function(err, datetimes) {
        if (err)
            res.send(err);

        mongoose.model('datetime').find(function(err, datetimes) {
            if (err)
                res.send(err)
            res.json(datetimes);
        });
    });
});

