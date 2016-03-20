module.exports = function(){

var mongoose 	= require('mongoose');
var db 			= require('../config/env/production');
var Schema 		= mongoose.Schema;

var fileSchema = new Schema({
  	fileName: String,
  	date: String,
  	time: String, 
  	username: String,
  	gig: String
});

var _model = mongoose.model('file', fileSchema);

	_findAll = function(success, fail ){
		_model.find({}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};

return{
	schema  : fileSchema,
    findAll : _findAll
}

}();
