module.exports = function(){

var mongoose 	= require('mongoose');
var db 			= require('../config/env/production.js');
var Schema 		= mongoose.Schema;

var groupSchema = new Schema({
  	groupName: String,
  	lastMessage: String,
  	lastMessageTime: String, 
  	groupPic: String,
  	headerColor: String
});

var _model = mongoose.model('group', groupSchema);

	_findAll = function(success, fail){
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
	schema  : groupSchema,
	remove  : _remove, 
    findAll : _findAll,
    findOne : _findOne
}

}();






  	
