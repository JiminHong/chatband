myapp.controller('NewGigCtrl', ["$scope", "$timeout", "$http", "$location", "$routeParams", 
function ($scope, $timeout, $http, $location, $routeParams) {

    $scope.goChat = function(){
        $location.path('/chat');
    }
    $scope.goGigList = function(){
        $location.path('/listGigs');
    }

    $scope.songPanelBody     = false;
    $scope.lineupPanelBody   = false;
    $scope.datetimePanelBody = false;
    $scope.locationPanelBody = false;
    $scope.wardrobePanelBody = false;

    $scope.add = "Add";
    $scope.doneIndicator = "";
    $scope.newGig = {};
    // ===================================================================
    // =============================== GIG ===============================
    // ===================================================================

    // this is working
    $scope.createGig = function(){
        $http.post('/addGigJSON', $scope.newGig)
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

    $scope.createSong = function() {
        $http.post('/addSongJSON', $scope.newGig)
    };


    // ===================================================================
    // ============================ Lineups ==============================
    // ===================================================================

    $scope.createLineup = function() {
        $http.post('/addLineupJSON', $scope.newGig)
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

    $scope.createLocation = function() {
        $scope.newGig.gigAddress = $scope.newGig.gigAddress.formatted_address;
        $http.post('/api/locations', $scope.newGig)
            .success(function(data) {
                $scope.newGig.gigAddress = $scope.newGig.gigAddress.formatted_address;
                $scope.location = data;
                console.log(data);
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


