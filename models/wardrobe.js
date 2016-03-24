module.exports = function(){

// Require mongoose
var mongoose 	= require('mongoose');
// Datbase connection
var db 			= require('../config/env/production.js');
var Schema 		= mongoose.Schema;

// Schema for wardrobe
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
	},
	gig_id: {
		type: String
	}
});

var _model = mongoose.model('wardrobe', wardrobeSchema);

	// Save a new wardrobe
	_save = function(gig_id, req, success, fail) {
		var newGig = new _model({
			wardrobeConcept : req.wardrobeConcept,
	        comment     	: req.comment,
	        wardrobeImg     : req.wardrobeImg,
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

	// Getting all warbrobe database
	_findAll = function(gigId, success, fail ){
		_model.find({'gig_id':gigId.gig_id}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};

	// Find one wardrobe database
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

	// Grab an object id and update db
	_update = function(req, success, fail){
		
		var id = req._id;
		var newWardrobeConcept = req.wardrobeConcept;
		var newComment = req.comment;
		var newWardrobeImg = req.wardrobeImg;
		var newWardrobeImg = req.WardrobeImg;

		// Updating function here
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

    // grab id and remove
	_remove = function(id, success, fail){
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
	schema  : wardrobeSchema,
	add 	: _save,
	remove  : _remove, 
	update  : _update,
    findAll : _findAll,
    findOne : _findOne,
    delete  : _remove
}

}();
