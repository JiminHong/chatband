module.exports = function(){

var mongoose 	= require('mongoose');
var db 			= require('../config/env/production');
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
		var songArtist = req.artist;
		var songTitle = req.title;
		var songSongDuration = req.songDuration;
		var songBpm = req.bpm;


        _model.update({_id: id}, 
        			  {$set:{
        			  		artist:songArtist,
        			  		title:songTitle, 
        			  		songDuration: songSongDuration, 
        			  		bpm: songBpm
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
	schema  : songSchema,
	add 	: _save,
	remove  : _remove, 
	update  : _update,
    findAll : _findAll,
    findOne : _findOne,
    delete  : _remove
}

}();
