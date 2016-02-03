myapp.controller('GigsCtrl', ["$scope", "$firebaseArray", "$firebaseAuth", "$location", "$routeParams", 
function ($scope, $firebaseArray, $firebaseAuth, $location, $routeParams) {
    console.log('GigsCtrl fired');

    $scope.goGig = function(){
    	$location.path('/songs');
    }

        
}]);


