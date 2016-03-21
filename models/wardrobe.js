module.exports = function(){

var mongoose 	= require('mongoose');
var db 			= require('../config/env/production.js');
var Schema 		= mongoose.Schema;

var wardrobeSchema = new Schema({
  	wardrobeConcept:{
		type: String
	},
	comment:{
		type: String
	},
	wardrobeImg:{
		type: String,
		default: "../../img/wardrobe/black_suit.jpg"
	}
});

var _model = mongoose.model('wardrobe', wardrobeSchema);

	_save = function(req, success, fail) {
		var newGig = new _model({
			wardrobeConcept : req.wardrobeConcept,
	        comment     	: req.comment,
	        wardrobeImg     : req.wardrobeImg
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
		var newWardrobeConcept = req.wardrobeConcept;
		var newComment = req.comment;
		var newWardrobeImg = req.wardrobeImg;
		var newWardrobeImg = req.WardrobeImg;


        _model.update({_id: id}, 
        			  {$set:{
        			  		wardrobeConcept:newWardrobeConcept,
        			  		comment:newComment,
        			  		wardrobeImg: newWardrobeImg
        			  }}, function(err,doc){
			            if (err) {
			                fail(err);
			                
			            }else{
			                success(doc);
			                
			            }
        				});
    }


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
	schema  : wardrobeSchema,
	add 	: _save,
	remove  : _remove, 
	update  : _update,
    findAll : _findAll,
    findOne : _findOne,
    delete  : _remove
}

}();
