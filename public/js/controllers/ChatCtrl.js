myapp.controller('ChatCtrl', ["$scope", "$location", "$routeParams", 
function ($scope, $location, $routeParams) {
    console.log('ChatCtrl fired');

        //Directs to the chat page
        $scope.goChats = function(){
            $location.path('/chats');
        } 

        $scope.goGigs = function(){
            $location.path('/listGigs');
        }
        
}]);


