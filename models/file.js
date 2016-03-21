module.exports = function(){

// Require mongoose
var mongoose 	= require('mongoose');
// databse connection
var db 			= require('../config/env/production.js');
var Schema 		= mongoose.Schema;

// Schema for file databse
var fileSchema = new Schema({
  	fileName: String,
  	date: String,
  	time: String, 
  	username: String,
  	gig: String
});

var _model = mongoose.model('file', fileSchema);

	// Getting all files from file database
	_findAll = function(success, fail ){
		_model.find({}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};
// returning all functions above here.
return{
	schema  : fileSchema,
    findAll : _findAll
}

}();
