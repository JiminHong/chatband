
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var DatetimeSchema = new Schema({
	scheduleName:{
		type: String
	},
	date:{
		type: Date
	},
	time:{
		type: String,
		default: ''
	},
	gigId: {
		type: Schema.Types.ObjectId
	}
})

mongoose.model('datetime', DatetimeSchema);

