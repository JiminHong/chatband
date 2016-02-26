myapp.controller('NewGigCtrl', ["$scope", "$timeout", "$http", "$location", "$routeParams", 
function ($scope, $timeout, $http, $location, $routeParams) {

    $scope.goChat = function(){
        $location.path('/chat');
    }

    $scope.songPanelBody     = false;
    $scope.lineupPanelBody   = false;
    $scope.datetimePanelBody = false;
    $scope.locationPanelBody = false;
    $scope.wardrobePanelBody = false;

    $scope.newGig = {};
    $scope.add = "Add";
    $scope.doneIndicator = "";

    // ===================================================================
    // =============================== GIG ===============================
    // ===================================================================
    $http.get('/api/gigs')
        .success(function(data) {
            $scope.gigs = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createGig = function() {
        $http.post('/api/gigs', $scope.newGig)
            .success(function(data) {
                $scope.newGig = {};
                $scope.gigs = data;
                lastGig = data.length - 1;
                $location.path('/goAddGig/'+ data[lastGig]._id);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // ===================================================================
    // =============================== Songs =============================
    // ===================================================================
    $http.get('/api/songs')
        .success(function(data) {
            $scope.songs = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


    $scope.createSong = function(gigId) {
        $http.post('/api/songs', $scope.newGig)
            .success(function(data) {
                $scope.newGig = {}; // clear the form so our user is ready to enter another
                $scope.songs = data;
                $scope.doneIndicator = "Added!";
                $scope.add = "";
                goBack = function(){
                    $scope.doneIndicator = "";
                    $scope.add = "Add";
                }
                $timeout(goBack, 1000);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        $timeout(500);
    };


    // ===================================================================
    // ============================ Lineups ==============================
    // ===================================================================

    $http.get('/api/lineups')
        .success(function(data) {
            $scope.lineup = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createLineup = function() {
        $http.post('/api/lineups', $scope.newGig)
            .success(function(data) {
                $scope.newGig = {}; 
                $scope.lineup = data;
                $scope.doneIndicator = "Added!";
                $scope.add = "";
                goBack = function(){
                    $scope.doneIndicator = "";
                    $scope.add = "Add";
                }
                $timeout(goBack, 1000);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        $timeout(500);
    };
    // ===================================================================
    // =========================== Datetimes =============================
    // ===================================================================
    $http.get('/api/datetimes')
        .success(function(data) {
            $scope.datetimes = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createDatetime = function() {
        $http.post('/api/datetimes', $scope.newGig)
            .success(function(data) {
                $scope.newGig = {}; // clear the form so our user is ready to enter another
                $scope.datetimes = data;
                $scope.doneIndicator = "Added!";
                $scope.add = "";
                goBack = function(){
                    $scope.doneIndicator = "";
                    $scope.add = "Add";
                }
                $timeout(goBack, 1000);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        $timeout(500);
    };

    $scope.deleteDatetime = function(id) {
        $http.delete('/api/datetimes/' + id)
            .success(function(data) {
                $scope.datetimes = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // ===================================================================
    // =========================== Location ==============================
    // ===================================================================

    $http.get('/api/locations')
        .success(function(data) {
            $scope.location = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createLocation = function() {
        $http.post('/api/locations', $scope.newGig)
            .success(function(data) {
                $scope.newGig = {}; 
                $scope.location = data;
                $scope.doneIndicator = "Added!";
                $scope.add = "";
                goBack = function(){
                    $scope.doneIndicator = "";
                    $scope.add = "Add";
                }
                $timeout(goBack, 1000);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        $timeout(500);
    };

    // ===================================================================
    // =========================== Datetimes =============================
    // ===================================================================
    $http.get('/api/wardrobes')
        .success(function(data) {
            $scope.wardrobes = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createWardrobe = function() {
        $http.post('/api/wardrobes', $scope.newGig)
            .success(function(data) {
                $scope.newGig = {}; // clear the form so our user is ready to enter another
                $scope.wardrobes = data;
                $scope.doneIndicator = "Added!";
                $scope.add = "";
                goBack = function(){
                    $scope.doneIndicator = "";
                    $scope.add = "Add";
                }
                $timeout(goBack, 1000);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        $timeout(500);
    };

    $scope.deleteWardrobe = function(id) {
        $http.delete('/api/wardrobes/' + id)
            .success(function(data) {
                $scope.wardrobes = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
            
}]);


