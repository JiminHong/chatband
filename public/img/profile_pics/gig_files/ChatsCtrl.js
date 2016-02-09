myapp.controller('ChatsCtrl', ["$scope", "$location", "$routeParams", 
function ($scope, $location, $routeParams) {
    console.log('ChatCtrl fired');

        //Directs to the chat page
        $scope.goChat = function(){
            $location.path('/chat');
        } 

        
}]);


