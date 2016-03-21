myapp.controller('NewGigCtrl', ["$scope", "$timeout", "$http", "$location", "$routeParams", 
function ($scope, $timeout, $http, $location, $routeParams) {
    // go to the chat page
    $scope.goChat = function(){
        $location.path('/chat');
    }
    // go to the list of gigs
    $scope.goGigList = function(){
        $location.path('/listGigs');
    }

    // This is for toggle. 
    $scope.songPanelBody     = false;
    $scope.lineupPanelBody   = false;
    $scope.datetimePanelBody = false;
    $scope.locationPanelBody = false;
    $scope.wardrobePanelBody = false;

    // Before you add anything
    $scope.add = "Add";
    // Before done adding
    $scope.doneIndicator = "";

    // ===================================================================
    // =============================== GIG ===============================
    // ===================================================================

    // Creating a gig
    $scope.createGig = function(){
        $scope.newGig.gigLocation = $scope.newGig.gigLocation.formatted_address;
        $http.post('/api/gig', $scope.newGig)
        .success(function(data) {
                $scope.newGig.gigLocation = $scope.newGig.gigLocation.formatted_address;
                $scope.gigs = data;
                $location.path('/goAddGig/'+ data._id);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });;
    }

    // ===================================================================
    // =============================== Songs =============================
    // ===================================================================
    // Creating a song
    $scope.createSong = function() {
        $http.post('/api/songs', $scope.newGig)
        .success(function(data) {
            $scope.newGig = {}; 
            $scope.song = data;
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
    // Creating a lineup
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
    // Creating a date and time for schedule
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

    // ===================================================================
    // =========================== Location ==============================
    // ===================================================================
    // Creating a location
    // $scope.newGig.gigAddress is an object not a string
    $scope.createLocation = function() {
    $scope.newGig.gigAddress = $scope.newGig.gigAddress.formatted_address;
        $http.post('/api/locations', $scope.newGig)
            .success(function(data) {
                $scope.newGig = {}; 
                $scope.newGig.gigAddress = data.gigAddress.formatted_address;
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
    // =========================== Wardrobes =============================
    // ===================================================================
    // Creating a new wardrobe
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

            
}]);


