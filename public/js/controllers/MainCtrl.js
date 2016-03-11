myapp.controller('MainCtrl', ["$scope", "$location", "$routeParams", 
function ($scope, $location, $routeParams) {

        $scope.currentPath = $location.path();

        // Go to the chat
        $scope.goChat = function(){
            $location.path('/chat');
        }
        // Go the the list of chats page
        $scope.goChats = function(){
            $location.path('/chats');
        } 
        // Go to the list of gigs page
        $scope.goListGigs = function(){
            $location.path('/listGigs');
        }
        
}]);
