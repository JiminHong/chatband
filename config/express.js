var config 		    = require('./config'),
	mongoose 	    = require('mongoose'),
	bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    express         = require('express');


module.exports = function() {
    var app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(methodOverride());

    //I don't have app/views but public/views
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/songs.server.routes.js')(app);

    app.use(express.static('./public'));

    return app;
};

// module.exports = {
//   db: 'mongodb://jhong:jhong@ds055525.mongolab.com:55545/heroku_sf66wt12',
//   require('../app/models/songs.server.model.js');
//   require('../app/routes/songs.server.routes.js');

//   return db;
// }


// curl -X POST -H "Content-Type: application/json" -d '{"artist": "The1975", "title": "girls", "time": "4:08", "bpm": "145"}' localhost:3000/songs
