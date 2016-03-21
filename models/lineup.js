module.exports = function(){

// Require mongoose
var mongoose 	= require('mongoose');
// db connection
var db 			= require('../config/env/production.js');
var Schema 		= mongoose.Schema;

// Schema for lineup
var lineupSchema = new Schema({
  	instrumentation: String,
	firstName: String,
	lastName: String,
	comment: String
});

var _model = mongoose.model('lineup', lineupSchema);

	// Saving all lineups
	_save = function(req, success, fail) {
		var newGig = new _model({
			instrumentation     : req.instrumentation,
	        firstName     		: req.firstName,
	        lastName    		: req.lastName,
	        comment 			: req.comment,
		});

		newGig.save(function(err, doc) {
			if(err){
				console.log(err);
			}else{
				success(doc);
			}
		})
	};

	// Getting all lineups
	_findAll = function(success, fail ){
		_model.find({}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};

	// Find one lineup
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

	// Update lineup by grabbing a object id and update.
	_update = function(req, success, fail){
		
		var id = req._id;
		var lineupInstrumentation = req.instrumentation;
		var lineupFirstName = req.firstName;
		var lineupLastName = req.lastName;
		var lineupComment = req.comment;

		// Updating function here.
        _model.update({_id: id}, 
        			  {$set:{
        			  		instrumentation:lineupInstrumentation,
        			  		firstName:lineupFirstName, 
        			  		lastName: lineupLastName, 
        			  		comment: lineupComment
        			  }}, function(err,doc){
			            if (err) {
			                fail(err);
			                
			            }else{
			                success(doc);
			                
			            }
        				});
    }

    // Grab an id and remove db
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
	schema  : lineupSchema,
	add 	: _save,
	remove  : _remove, 
	update  : _update,
    findAll : _findAll,
    findOne : _findOne,
    delete  : _remove
}

}();