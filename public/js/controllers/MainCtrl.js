myapp.controller('MainCtrl', ["$scope", "$http", "$location", "$routeParams", 
function ($scope, $http, $location, $routeParams) {
    console.log('MainCtrl fired');

    $scope.goChat = function(){
        $location.path('/chat');
    }

    $scope.newGig = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/songs')
        .success(function(data) {
            $scope.songs = data;
            console.log("here's the data",data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createSong = function() {
        $http.post('/api/songs', $scope.newGig)
            .success(function(data) {
                $scope.newGig = {}; // clear the form so our user is ready to enter another
                $scope.songs = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteSong = function(id) {
        $http.delete('/api/songs/' + id)
            .success(function(data) {
                $scope.songs = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
        
}]);


