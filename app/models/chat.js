var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
  groupName		: String,
  groupAdmin	: String,
  groupMembers	: String,
  groupGigs 	: String
});

mongoose.model('chat', chatSchema);
