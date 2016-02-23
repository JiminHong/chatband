
// ===================================================================
// ============================== Groups =============================
// ===================================================================
app.get('/groups', function(req, res) {

    mongoose.model('group').find(function(err, groups) {
        if (err)
            res.send(err)
        res.json(groups); 
    });
});

app.post('/groups', function(req, res) {
    mongoose.model('group').create({
        groupName        : req.body.groupName,
        lastMessage      : req.body.lastMessage,
        lastMessageTime  : req.body.lastMessageTime,
        groupPic         : req.body.groupPic
    }, function(err, group) {
        if (err)
            res.send(err);

        mongoose.model('group').find(function(err, groups) {
            if (err)
                res.send(err)
            res.json(groups);
        });
    });

});


app.delete('/groups/:group_id', function(req, res) {
    mongoose.model('group').remove({
        _id : req.params.group_id
    }, function(err, group) {
        if (err)
            res.send(err);

        mongoose.model('group').find(function(err, groups) {
            if (err)
                res.send(err)
            res.json(groups);
        });
    });
});

// ===================================================================
// =============================== Chats =============================
// ===================================================================
app.get('/chats', function(req, res) {

    mongoose.model('chat').find(function(err, chats) {
        if (err)
            res.send(err)
        res.json(chats); 
    });
});

app.post('/chats', function(req, res) {

    mongoose.model('chat').create({
        groupName  : req.body.groupName,
        groupAdmin   : req.body.groupAdmin,
        groupMembers    : req.body.groupMembers,
        groupGigs     : req.body.groupGigs
    }, function(err, chat) {
        if (err)
            res.send(err);

        mongoose.model('chat').find(function(err, chats) {
            if (err)
                res.send(err)
            res.json(chats);
        });
    });

});


app.delete('/chats/:chat_id', function(req, res) {
    mongoose.model('chat').remove({
        _id : req.params.chat_id
    }, function(err, chat) {
        if (err)
            res.send(err);

        mongoose.model('chat').find(function(err, chats) {
            if (err)
                res.send(err)
            res.json(chats);
        });
    });
});


// ===================================================================
// =============================== Songs =============================
// ===================================================================
app.get('/songs', function(req, res) {

    mongoose.model('song').find(function(err, songs) {
        if (err)
            res.send(err)
        res.json(songs); 
    });
});

app.post('/songs', function(req, res) {

    mongoose.model('song').create({
        artist  : req.body.artist,
        title   : req.body.title,
        time    : req.body.time,
        bpm     : req.body.bpm,
        done    : false
    }, function(err, song) {
        if (err)
            res.send(err);

        mongoose.model('song').find(function(err, songs) {
            if (err)
                res.send(err)
            res.json(songs);
        });
    });

});


app.delete('/songs/:song_id', function(req, res) {
    mongoose.model('song').remove({
        _id : req.params.song_id
    }, function(err, song) {
        if (err)
            res.send(err);

        mongoose.model('song').find(function(err, songs) {
            if (err)
                res.send(err)
            res.json(songs);
        });
    });
});

app.put('api/songs/:song_id', function(req, res){

    var id="56c898564978391100985fd8";

    mongoose.model('song').findByIdAndUpdate(id, { $set: { artist: 'new one' }}, function (err, song) {
      if (err) return handleError(err);
      res.send(song);
    });
})

// ===================================================================
// ============================ Lineups ==============================
// ===================================================================
app.get('/lineups', function(req, res) {

    mongoose.model('lineup').find(function(err, lineups) {
        if (err)
            res.send(err)
        res.json(lineups); 
    });
});

app.post('/lineups', function(req, res) {

    mongoose.model('lineup').create({
        instrumentation  : req.body.instrumentation,
        name   : req.body.name,
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

app.get('/lineups/:lineup_id', function(req, res){
    _id : req.params.lineup_id;
    mongoose.model('lineup').findOne({_id:req.params.lineup_id}, function(err, lineups){
        res.json(lineups);
    });
});

app.post('/lineups/:lineup_id', function(req, res){
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

app.delete('/lineups/:lineup_id', function(req, res) {
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



// ===================================================================
// =========================== Date.Time =============================
// ===================================================================
app.get('/datetimes', function(req, res) {

    mongoose.model('datetime').find(function(err, datetimes) {
        if (err)
            res.send(err)
        res.json(datetimes); 
    });
});

app.post('/datetimes', function(req, res) {

    mongoose.model('datetime').create({
        scheduleName  : req.body.scheduleName,
        date   : req.body.date,
        time    : req.body.time
    }, function(err, datetime) {
        if (err)
            res.send(err);

        mongoose.model('datetime').find(function(err, datetimes) {
            if (err)
                res.send(err)
            res.json(datetimes);
        });
    });

});


app.delete('/datetimes/:datetime_id', function(req, res) {
    mongoose.model('datetime').remove({
        _id : req.params.datetime_id
    }, function(err, datetime) {
        if (err)
            res.send(err);

        mongoose.model('datetime').find(function(err, datetimes) {
            if (err)
                res.send(err)
            res.json(datetimes);
        });
    });
});

// ===================================================================
// =========================== Location ==============================
// ===================================================================

app.get('/locations', function(req, res) {
    mongoose.model('location').find(function(err, locations) {
        res.send(locations)
    })
})


app.post('/locations', function(req, res) {

    mongoose.model('location').create({
        street  : req.body.street,
        city    : req.body.city,
        state   : req.body.state,
        zipcode : req.body.zipcode
    }, function(err, location) {
        if (err)
            res.send(err);

        mongoose.model('location').find(function(err, locations) {
            if (err)
                res.send(err)
            res.json(locations);
        });
    });
});

router.get('*', function(req, res) {
  res.json({ message: 'You are running router.get!' });
});


// ===================================================================
// =========================== Wardrobe ==============================
// ===================================================================

app.get('/wardrobes', function(req, res) {
    mongoose.model('wardrobe').find(function(err, wardrobes) {
        res.send(wardrobes)
    })
})


app.post('/wardrobes', function(req, res) {

    mongoose.model('wardrobe').create({
        wardrobeConcept    : req.body.wardrobeConcept,
        comment     : req.body.comment,
        wardrobeImg : req.body.wardrobeImg
    }, function(err, wardrobe) {
        if (err)
            res.send(err);

        mongoose.model('wardrobe').find(function(err, wardrobes) {
            if (err)
                res.send(err)
            res.json(wardrobes);
        });
    });
});

router.get('*', function(req, res) {
  res.json({ message: 'You are running router.get!' });
});