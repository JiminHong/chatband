myapp.controller('SongsCtrl', ["$scope", "$location", "$routeParams", 
function ($scope, $location, $routeParams) {
    console.log('SongsCtrl fired');

    $scope.addSong = function(){
    	console.log('addsong function here');
    }

   
            
}]);


