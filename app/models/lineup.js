var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lineupSchema = new Schema({
  instrumentation: String,
  firstName: String,
  lastName: String,
  comment: String,
	gigId: {
		type: Schema.Types.ObjectId
	}
});

mongoose.model('lineup', lineupSchema);

