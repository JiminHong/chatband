module.exports = function(){

var mongoose 	= require('mongoose');
var db 			= require('../config/db');
var Schema 		= mongoose.Schema;

var songSchema = new Schema({
  	artist:{
		type: String,
		default: 'Unknown artist'
	},
	title:{
		type: String,
		default: 'Unknown Title'
	},
	songDuration : {
		type: String,
		default: '00:00'
	},
	bpm: {
		type: Number,
		default: 0
	}
});

var _model = mongoose.model('song', songSchema);

	_save = function(req, success, fail) {
		var newGig = new _model({
			artist     		: req.artist,
	        title     		: req.title,
	        songDuration    : req.songDuration,
	        bpm 			: req.bpm,
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
		console.log("in model",objectId);
		_model.findOne({'_id': objectId}, function(err, doc){
			if(err){
				console.log(err);
				fail(err);
			}else{
				success(doc);
				console.log("in model ",doc);
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
	schema  : songSchema,
	add 	: _save,
    findAll : _findAll,
    findOne : _findOne,
    delete  : _remove
}

}();