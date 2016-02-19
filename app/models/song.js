
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
	time:{
		type: String,
		default: ''
	},
	bpm: {
		type: Number,
		default: 0
	}
})

mongoose.model('Song', SongsSchema);

 module.exports = Song;
//==============================================================
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var songSchema = new Schema({
//   artist: String,
//   title: String,
//   time: String,
//   bpm : Number
// });

// // the schema is useless so far
// // we need to create a model using it
// var SongTest = mongoose.model('SongTest', songSchema);

// // make this available to our users in our Node applications
// module.exports = SongTest;
