
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var WardrobeSchema = new Schema({
	wardrobeConcept:{
		type: String
	},
	comment:{
		type: String
	},
	wardrobeImg:{
		type: String,
		default: "../../img/wardrobe/black_suit.jpg"
	}
})

mongoose.model('wardrobe', WardrobeSchema);

