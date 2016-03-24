module.exports = function(){

// Require mongoose
var mongoose 	= require('mongoose');
//db connection
var db 			= require('../config/env/production.js');
var Schema 		= mongoose.Schema;

// Schema for gig address
var locationSchema = new Schema({
  	gigAddress		: String,
	gig_id : String
	
});

var _model = mongoose.model('location', locationSchema);

	// Saving db 
	_save = function(gig_id, req, success, fail) {
		var newGig = new _model({
			gigAddress     : req.gigAddress,
	        gig_id			: gig_id
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
	_findAll = function(gigId, success, fail ){
		_model.find({'gig_id':gigId.gig_id}, function(err, doc){
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