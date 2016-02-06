var mongoose 	= require('mongoose'),
	Songs 		= mongoose.model('Songs');

var newSong = Song({
	artist 	: 'newArtist',
	title	: 'newTitle',
	time 	: '100',
	bpm 	: 123
});

newSong.save(function(err) {
	if (err) throw err;

	console.log("new song created")
})

Songs.find({}, function(err, songs) {
	if(err) throw err;

	console.log(songs);
})

exports.create = function(req, res, next) {
	var songs = new Songs(req.body);

	songs.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(songs);
		}
	})
}

exports.list = function(req, res, next) {
    Songs.find({}, function(err, songs) {
        if (err) {
            return next(err);
        }
        else {
            res.json(songs);
        }
    });
};

exports.read = function(req, res) {
  res.json(req.songs);
};

exports.update = function(req, res) {
  var songs = req.songs;

  songs.artist = req.body.artist;
  songs.title = req.body.title;

  songs.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(songs);
    }
  });
};

exports.delete = function(req, res) {
  var songs = req.songs;

  songs.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(songs);
    }
  });
};



// exports.userByID = function(req, res, next, id) {
//     User.findOne({
//             _id: id
//         },
//         function(err, user) {
//             if (err) {
//                 return next(err);
//             }
//             else {
//                 req.user = user;
//                 next();
//             }
//         }
//     );
// };



var getErrorMessage = function(err) {
  if (err.errors) {
    for (var errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  } else {
    return 'Unknown server error';
  }
};

