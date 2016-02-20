var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
  newGroupName		: String,
  newGroupAdmin		: String,
  newGroupMembers	: String,
  newGroupGigs 		: String
});

mongoose.model('chat', chatSchema);
