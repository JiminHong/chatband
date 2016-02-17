myapp.controller('MainCtrl', ["$scope", "$http", "$location", "$routeParams", 
function ($scope, $http, $location, $routeParams) {
    console.log('MainCtrl fired');

    $scope.goChat = function(){
        $location.path('/chat');
    }

}]);


