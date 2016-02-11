myapp.controller('MainCtrl', ["$scope", "$location", "$routeParams", 
function ($scope, $location, $routeParams) {
    console.log('MainCtrl fired');

    $scope.goChat = function(){
        $location.path('/chat');
    }
        
}]);


