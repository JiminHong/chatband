var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lineupSchema = new Schema({
  instrumentation: String,
  name: String,
  comment: String
});

// the schema is useless so far
// we need to create a model using it
var Lineup = mongoose.model('Lineup', userSchema);

// make this available to our users in our Node applications
module.exports = Lineup;