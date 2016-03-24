module.exports = function(){

// Require mongoose
var mongoose 	= require('mongoose');
// Database connection
var db 			= require('../config/env/production.js');
var Schema 		= mongoose.Schema;

// Schema for groups(in chats.html)
var groupSchema = new Schema({
	groupName:{
		type: String,
		default: 'group name'
	},
	lastMessage:{
		type: String,
		default: 'Last Message'
	},
	lastMessageTime:{
		type: String,
		default: '00:00'
	},
	groupPic:{
		type: String,
		default: '/img/bands/band1.jpg'
	},
	headerColor:{
		type: String,
		default: '#5E5D34'
	}
});

var _model = mongoose.model('group', groupSchema);

	_save = function(req, success, fail) {
		var newGroup = new _model({
			groupName 			: req.groupName,
			lastMessage 		: req.lastMessage,
		  	lastMessageTime 	: req.lastMessageTime, 
		  	groupPic 			: req.groupPic,
		  	headerColor 		: req.headerColor
		});

		newGroup.save(function(err, doc) {
			if(err){
				console.log(err);
			}else{
				success(doc);
			}
		})
	};

	// Getting all database from gig db
	_findAll = function(groupId, success, fail ){
		_model.find({'_id':groupId}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};

	// Find one group db
	// _findOne = function(id ,success, fail){
	// 	objectId = id._id;
	// 	_model.findOne({'_id': objectId}, function(err, doc){
	// 		if(err){
	// 			fail(err);
	// 		}else{
	// 			success(doc);
	// 		}
	// 	})
	// };

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
	add 	: _save,
	remove  : _remove, 
    findAll : _findAll    
}

}();






  	
