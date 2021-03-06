module.exports = function(){

// Require mongoose
var mongoose 	= require('mongoose');
// Database connection
var db 			= require('../config/env/production.js');
var Schema 		= mongoose.Schema;

//Schema for date and time
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
	},
	gig_id: {
		type: String
	}
});


var _model = mongoose.model('datetime', datetimeSchema);

	// Saving date and time 
	_save = function(gig_id, req, success, fail) {
		var newGig = new _model({
			time     		: req.time,
	        date     		: req.date,
	        scheduleName    : req.scheduleName,
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

	// Getting all date and time
	_findAll = function(gigId,success, fail ){
		_model.find({'gig_id':gigId.gig_id}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};

	// Find one date and time
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


	// Updating date and time
	_update = function(req, success, fail){
		
		// Grab an id for the date and time
		var id = req._id;
		var datetimetime = req.time;
		var datetimedate = req.date;
		var datetimescheduleName = req.scheduleName;

		// Update new date and time
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

    // Grab an id and delete data.
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
	schema  : datetimeSchema,
	add 	: _save,
	remove  : _remove, 
	update  : _update,
    findAll : _findAll,
    findOne : _findOne,
    delete  : _remove
}

}();
