module.exports = function(){

// Require mongoose
var mongoose 	= require('mongoose');
//db connection
var db 			= require('../config/env/production.js');
var Schema 		= mongoose.Schema;

// Schema for gig address
var locationSchema = new Schema({
  	gigAddress		: String
});

var _model = mongoose.model('location', locationSchema);

	// Saving db 
	_save = function(req, success, fail) {
		var newGig = new _model({
			gigAddress     : req.gigAddress
		});

		newGig.save(function(err, doc) {
			if(err){
				console.log(err);
			}else{
				success(doc);
			}
		})
	};

	// Getting all db
	_findAll = function(success, fail ){
		_model.find({}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};

	// Find one db using object id
	_findOne = function(id ,success, fail){
		objectID = 'ObjectId("'+id+'")';
		_model.findOne({'_id': objectID}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};

	// Grab object id and remove db
	_remove = function(id, success, fail){
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
	schema  : locationSchema,
	add 	: _save,
    findAll : _findAll,
    findOne : _findOne,
    delete  : _remove
}

}();