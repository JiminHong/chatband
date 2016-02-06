myapp.controller('ListGigsCtrl', ["$scope", "$firebaseArray", "$firebaseAuth", "$location", "$routeParams", 
function ($scope, $firebaseArray, $firebaseAuth, $location, $routeParams) {
    console.log('ListGigsCtrl fired');

    $scope.goGigs = function(){
    	$location.path('/gigs');
    }

    //Directs to the chat page
    $scope.goChat = function(){
        $location.path('/chat');
    } 

    $scope.goAddGigs = function(){
    	$location.path('/addSongs');
    }
    
    
        
}]);


