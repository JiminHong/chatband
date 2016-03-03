module.exports = function(express){

    var router = express.Router();
    var Gig = require('../models/gig.js');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

router.get('/gigs', function(req, res) {
    Gig.find(function(err, gigs) {
        if (err)
            res.send(err)
        res.json(gigs); 
    });
});


router.post('/gigs', function(req, res) {
    Gig.create({
        gigName     : req.body.gigName,
        gigDate     : req.body.gigDate,
        gigTime     : req.body.gigTime,
        gigLocationBefore : req.body.gigLocationBefore,
        gigLocation : req.body.gigLocation
    }, function(err, gig) {
        if (err)
            res.send(err);

        Gig.find(function(err, gigs) {
            if (err){
                res.send(err)
            }else{
                res.status(200).json(gigs);
            }
            
        });
    });

});

return router;
};