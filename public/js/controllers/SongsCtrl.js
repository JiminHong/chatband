myapp.controller('SongsCtrl', ["$scope", "$location", "$routeParams", 
function ($scope, $location, $routeParams) {
    console.log('SongsCtrl fired');

   $scope.goChat = function(){
            $location.path('/chat');
        }
            
}]);


