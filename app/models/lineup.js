var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lineupSchema = new Schema({
  instrumentation: String,
  name: String,
  comment: String
});

module.exports = mongoose.model('Lineup', lineupSchema);