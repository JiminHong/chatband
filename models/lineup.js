module.exports = function(){

var mongoose 	= require('mongoose');
var db 			= require('../config/db');
var Schema 		= mongoose.Schema;

var lineupSchema = new Schema({
  	instrumentation: String,
	firstName: String,
	lastName: String,
	comment: String
});

var _model = mongoose.model('lineup', lineupSchema);

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
		objectId = id._id;
		_model.findOne({'_id': objectId}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};


	_update = function(req, success, fail){
		
		console.log('REQ', req);
		var id = req._id;
		var lineupInstrumentation = req.instrumentation;
		var lineupFirstName = req.firstName;
		var lineupLastName = req.lastName;
		var lineupComment = req.comment;


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
	schema  : lineupSchema,
	add 	: _save,
	remove  : _remove, 
	update  : _update,
    findAll : _findAll,
    findOne : _findOne,
    delete  : _remove
}

}();