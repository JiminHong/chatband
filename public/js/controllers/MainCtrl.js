myapp.controller('MainCtrl', ["$scope", "$location", "$routeParams", 
function ($scope, $location, $routeParams) {

        $scope.currentPath = $location.path();

        $scope.goChat = function(){
            $location.path('/chat');
        }
        $scope.goChats = function(){
            $location.path('/chats');
        } 

        $scope.goListGigs = function(){
            $location.path('/listGigs');
        }
        
}]);
