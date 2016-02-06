//app/routes.js

var songs = require('../../app/controllers/songs.server.controller');

module.exports = function(app){
	app.route('/songs')
		.post(songs.create)
		.get(songs.list);
	// frontend routes =========================================================
    // route to handle all angular requests
    // app.get('*', function(req, res) {
    //     res.sendfile('./public/index.html'); // load our public/index.html file
    // });
}