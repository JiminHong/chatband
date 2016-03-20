module.exports = function(){

var mongoose 	= require('mongoose');
var db 			= require('../config/db');
var Schema 		= mongoose.Schema;

var locationSchema = new Schema({
  	gigAddress		: String
});

var _model = mongoose.model('location', locationSchema);

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
		_model.remove({_id: id}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};


return{
	schema  : locationSchema,
	add 	: _save,
    findAll : _findAll,
    findOne : _findOne,
    delete  : _remove
}

}();