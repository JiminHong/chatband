
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var SongSchema = new Schema({
	artist:{
		type: String,
		default: 'Unknown artist'
	},
	title:{
		type: String,
		default: 'Unknown Title'
	},
	songDuration:{
		type: String,
		default: 'default String'
	},
	bpm: {
		type: Number,
		default: 0
	},
	gigId: {
		type: String
	}
})

mongoose.model('song', SongSchema);

