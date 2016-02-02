// model.js

var mongoose = require('mongoose');
module.exports = mongoose.model('Model', {
	name : {type: String, default: 'defaultModel'}
})