
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var WardrobeSchema = new Schema({
	wardrobe:{
		type: String
	},
	comment:{
		type: String
	},
	wardrobeImg:{
		type: String
	}
})

mongoose.model('wardrobe', WardrobeSchema);

