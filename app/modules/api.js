var express        = require('express');
var app            = express();
var router         = express.Router();
var mongoose	   = require('mongoose');
var morgan         = require('morgan');  
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var fs             = require('fs');


fs.readdirSync(__dirname + '/app/models').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/app/models/' + filename)
});

// configuration ===========================================
    
// config files
var db = require('./config/db');

var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       
  
mongoose.connect(db.url, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});



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