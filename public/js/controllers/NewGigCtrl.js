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

    $scope.goUpdateSong = function(id){
        $location.path('/goUpdateSong/'+id);
    }

    $scope.updateSong = function(updateGig){
        console.log("updateSong function fires","ID :: ",$routeParams);
        $http.put('/api/songs/' + $routeParams)
            .success(function(response, status, headers, config){
                $scope.updateGig = response.updateGig;
                })
            .error(function(response, status, headers, config){
                $scope.error_message = response.error_message;
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
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
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
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
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
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
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


