myapp.controller('ManagingGigsCtrl', ["$scope", "$location", "$routeParams", 
function ($scope, $location, $routeParams) {
    console.log('ManagingGigsCtrl fired');

    $scope.goChat = function(){
            $location.path('/chat');
        }
        
}]);


