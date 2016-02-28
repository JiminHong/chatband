var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GigSchema = new Schema({
  gigName		: String,
  gigDate		: Date,
  gigTime		: String, 
  gigLocation	: String,
  gigLocationBefore : String
});

mongoose.model('gig', GigSchema);
