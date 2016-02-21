
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var DatetimeSchema = new Schema({
	scheduleName:{
		type: String,
	},
	date:{
		type: Date,
		default: 'Unknown Title'
	},
	time:{
		type: String,
		default: ''
	}
})

mongoose.model('datetime', DatetimeSchema);

