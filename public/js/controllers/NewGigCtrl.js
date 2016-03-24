myapp.controller('NewGigCtrl', ["$scope", "$timeout", "$http", "$location", "$routeParams", 
function ($scope, $timeout, $http, $location, $routeParams) {
    // go to the chat page
    $scope.goChat = function(){
        $location.path('/chat');
    }
    // go to the list of gigs
    // gigId?
    $scope.goGigList = function(){
        $location.path('/listGigs/'+$routeParams.gigId);
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

    // getting a group that has $routeParams.groupId as _id
    $http.get('/api/groups/'+$routeParams.groupId)
        .success(function(data) {
            $scope.groups = data;
            $scope.groupName = data.groupName;
        })
        .error(function(data) {
            console.log('Error: ' + data);
    });

    // ===================================================================
    // =============================== GIG ===============================
    // ===================================================================

    // Creating a gig
    $scope.createGig = function(){
        $scope.newGig.gigLocation = $scope.newGig.gigLocation.formatted_address;
        $http.post('/api/gig/'+$routeParams.groupId, $scope.newGig)
        .success(function(data) {
                $scope.newGig.gigLocation = $scope.newGig.gigLocation.formatted_address;
                $scope.newGig.group_id = $routeParams.groupId; 
                $scope.gigs = data;
                console.log(data._id);
                // data._id is gig Id
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
        $http.post('/api/songs/'+$routeParams.gigId, $scope.newGig)
        .success(function(data) {
            $scope.newGig = {}; 
            $scope.newGig.gig_id = $routeParams.gigId;
            console.log("gig id when create new song", $scope.newGig.gig_id);
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
        $http.post('/api/lineups/'+$routeParams.gigId, $scope.newGig)
            .success(function(data) {
                $scope.newGig = {};
                $scope.newGig.gig_id = $routeParams.gigId; 
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


