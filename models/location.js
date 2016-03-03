var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
	gigAddress: String,
	gigId: {
		type: Schema.Types.ObjectId
	}
});

// the schema is useless so far
// we need to create a model using it
var Location = mongoose.model('location', locationSchema);

// make this available to our users in our Node applications
module.exports = Location;