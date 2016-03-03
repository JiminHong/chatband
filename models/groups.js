var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groupSchema = new Schema({
  groupName			: String,
  lastMessage		: String,
  lastMessageTime	: String,
  groupPic 			: String
});

mongoose.model('group', groupSchema);
