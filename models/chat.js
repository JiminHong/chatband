module.exports = function(){

var mongoose 	= require('mongoose');
var db 			= require('../config/env/production.js');
var Schema 		= mongoose.Schema;

// Schema for chat page
var chatSchema = new Schema({
  	senderProfilePic:{
		type: String,
		default: 'Unknown senderProfilePic'
	},
	senderUsername:{
		type: String,
		default: 'Unknown senderUsername'
	},
	message : {
		type: String,
		default: '00:00'
	},
	time: { 
		type : Date, 
		default: Date.now 
	}
});

var _model = mongoose.model('chat', chatSchema);

	// Add a new message
	_save = function(req, success, fail) {
		var newChat = new _model({
			senderProfilePic  : req.senderProfilePic,
	        senderUsername    : req.senderUsername,
	        message    		  : req.message,
	        time 			  : req.time,
		});

		newChat.save(function(err, doc) {
			if(err){
				console.log(err);
			}else{
				success(doc);
			}
		})
	};

	// Getting all messages
	_findAll = function(success, fail ){
		_model.find({}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};
// returning all functions above here.
return{
	schema  : chatSchema,
	add 	: _save,
    findAll : _findAll
}

}();