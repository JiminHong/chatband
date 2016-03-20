module.exports = function(){

var mongoose 	= require('mongoose');
var db 			= require('../config/env/production.js');
var Schema 		= mongoose.Schema;

var gigSchema = new Schema({
  	gigName		: String,
  	gigDate		: String,
  	gigTime		: String,
  	gigLocation	: String,
  	gigLocationBefore : String
});

var _model = mongoose.model('gig', gigSchema);

	_save = function(req, success, fail) {
		var newGig = new _model({
			gigName     : req.gigName,
	        gigDate     : req.gigDate,
	        gigTime     : req.gigTime,
	        gigLocationBefore : req.gigLocationBefore,
	        gigLocation : req.gigLocation
		});

		newGig.save(function(err, doc) {
			if(err){
				console.log(err);
			}else{
				success(doc);
			}
		})
	};

	_findAll = function(success, fail ){
		_model.find({}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};

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



return{
	schema  : gigSchema,
	add 	: _save,
	remove  : _remove, 
    findAll : _findAll,
    findOne : _findOne,
    delete  : _remove
}

}();