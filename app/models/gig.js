var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GigSchema = new Schema({
  gigName		: String
});

mongoose.model('gig', GigSchema);
