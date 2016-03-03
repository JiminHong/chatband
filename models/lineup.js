module.exports = function(){

var mongoose 	= require('mongoose');
var db 			= require('../config/db');
var Schema 		= mongoose.Schema;

var lineupSchema = new Schema({
  	instrumentation: String,
  firstName: String,
  lastName: String,
  comment: String,
	gigId: {
		type: Schema.Types.ObjectId
	}
});

var _model = mongoose.model('lineup', lineupSchema);

	_save = function(req, success, fail) {
		var newGig = new _model({
			instrumentation     : req.instrumentation,
	        firstName     : req.firstName,
	        lastName     : req.lastName,
	        comment : req.comment,
	        gigId : req.gigId
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
				console.log(doc);
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
		console.log(id);
		_model.remove({_id: id}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};


return{
	schema  : lineupSchema,
	add 	: _save,
    findAll : _findAll,
    findOne : _findOne,
    delete  : _remove
}

}();