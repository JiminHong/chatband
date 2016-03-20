module.exports = function(){

var mongoose 	= require('mongoose');
var db 			= require('../config/db');
var Schema 		= mongoose.Schema;

var datetimeSchema = new Schema({
  	time:{
		type: String,
		default: 'Unknown time'
	},
	date:{
		type: String,
		default: 'Unknown date'
	},
	scheduleName : {
		type: String,
		default: '00:00'
	}
});

var _model = mongoose.model('datetime', datetimeSchema);

	_save = function(req, success, fail) {
		var newGig = new _model({
			time     		: req.time,
	        date     		: req.date,
	        scheduleName    : req.scheduleName
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
		var datetimetime = req.time;
		var datetimedate = req.date;
		var datetimescheduleName = req.scheduleName;


        _model.update({_id: id}, 
        			  {$set:{
        			  		time:datetimetime,
        			  		date:datetimedate, 
        			  		scheduleName: datetimescheduleName
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
	schema  : datetimeSchema,
	add 	: _save,
	remove  : _remove, 
	update  : _update,
    findAll : _findAll,
    findOne : _findOne,
    delete  : _remove
}

}();
