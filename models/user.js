module.exports = function(){

// Require mongoose
var mongoose 	= require('mongoose');
// Database connection
var db 			= require('../config/env/production.js');
var Schema 		= mongoose.Schema;

// Schema for groups(in chats.html)
var userSchema = new Schema({
	firstName:{
		type: String,
		default: 'firstName'
	},
	lastName:{
		type: String,
		default: 'Last Name'
	},
	profilePic:{
		type: String,
		default: '/img/profile_pics/user.jpg'
	},
	group_id:{
		type: String,
		default: 'group_id'
	}
});

var _model = mongoose.model('user', userSchema);

	_save = function(gig_id, req, success, fail) {
		var newUser = new _model({
			firstName 			: req.firstName,
			lastName 		: req.lastName,
		  	profilePic 	: req.profilePic, 
		  	group_id 			: req.group_id
		});

		newUser.save(function(err, doc) {
			if(err){
				console.log(err);
			}else{
				success(doc);
			}
		})
	};

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
	schema  : userSchema,
	add 	: _save,
	remove  : _remove, 
    findAll : _findAll    
}

}();






  	
