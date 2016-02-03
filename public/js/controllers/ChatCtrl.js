myapp.controller('ChatCtrl', ["$scope", "$firebaseArray", "$firebaseAuth", "$location", "$routeParams", 
function ($scope, $firebaseArray, $firebaseAuth, $location, $routeParams) {
    console.log('ChatCtrl fired');

        //Directs to the chat page
        $scope.goChats = function(){
            $location.path('/chats');
        } 

        $scope.goGigs = function(){
            $location.path('/gigs');
        }
        
}]);


