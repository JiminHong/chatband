module.exports = function(){

// Require mongoose
var mongoose 	= require('mongoose');
// Database connection
var db 			= require('../config/env/production.js');
var Schema 		= mongoose.Schema;

// Schema for groups(in chats.html)
var groupSchema = new Schema({
  	groupName: String,
  	lastMessage: String,
  	lastMessageTime: String, 
  	groupPic: String,
  	headerColor: String
});

var _model = mongoose.model('group', groupSchema);

	// Getting all groups db
	_findAll = function(success, fail){
		_model.find({}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};

	// Find one group db
	_findOne = function(id ,success, fail){
		objectId = id._id;
		_model.findOne({'_id': objectId}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};

	// Grab an id and remove group db
	_remove = function(id, success, fail){
		console.log("id in model",id);
		_model.remove({_id: id}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};

// returning all functions above here.
return{
	schema  : groupSchema,
	remove  : _remove, 
    findAll : _findAll,
    findOne : _findOne
}

}();






  	
