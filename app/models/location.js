var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
  street: String,
  city: String,
  state: String,
  zipcode: Number
});

// the schema is useless so far
// we need to create a model using it
var Location = mongoose.model('Location', locationSchema);

// make this available to our users in our Node applications
module.exports = Location;