myapp.controller('ChatCtrl', ["$scope", "$location", "$routeParams", 
function ($scope, $location, $routeParams) {
    console.log('ChatCtrl fired');

        $scope.currentPath = $location.path();
        console.log($location.path());

        $scope.goChat = function(){
            $location.path('/chat');
        }
        $scope.goChats = function(){
            $location.path('/chats');
        } 

        $scope.goGigs = function(){
            $location.path('/listGigs');
        }
        
}]);
