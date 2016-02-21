myapp.controller('NewGigCtrl', ["$scope", "$http", "$location", "$routeParams", 
function ($scope, $http, $location, $routeParams) {

    console.log("NewGigCtrl fired");
    $scope.goChat = function(){
            $location.path('/chat');
    }

    $scope.newGig = {};

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

    $scope.createSong = function() {
        $http.post('/api/songs', $scope.newGig)
            .success(function(data) {
                $scope.newGig = {}; // clear the form so our user is ready to enter another
                $scope.songs = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.deleteSong = function(id) {
        $http.delete('/api/songs/' + id)
            .success(function(data) {
                $scope.songs = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
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
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };


        
            
}]);


