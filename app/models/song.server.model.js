// var mongoose = require('mongoose'),
// 	Schema = mongoose.Schema;

// var SongSchema = new Schema({
// 	artist:{
// 		type: String,
// 		default: 'Unknown artist'
// 	},
// 	title:{
// 		type: String,
// 		default: 'Unknown Title'
// 	},
// 	time:{
// 		type: String,
// 		default: ''
// 	},
// 	bpm: {
// 		type: Number,
// 		default: 0
// 	}
// })

// mongoose.model('Song', SongsSchema);

//  module.exports = Song;

var Song = mongoose.model('Song', {
    artist  : String,
    title   : String,
    time    : String,
    bpm     : Number
});