myapp.controller('ManagingGigs', ["$scope", "$firebaseArray", "$firebaseAuth", "$location", "$routeParams", 
function ($scope, $firebaseArray, $firebaseAuth, $location, $routeParams) {
    console.log('ManagingGigs fired');

    $scope.goGigs = function(){
    	$location.path('/gigs');
    }

    $scope.goSongs = function(){
    	$location.path('/songs');
    }

    $scope.goLineup = function(){
    	$location.path('/lineup');
    }

    $scope.goDatetime = function(){
    	$location.path('/datetime');
    }

    $scope.goLocation = function(){
    	$location.path('/location');
    }

    $scope.goWardrobe = function(){
    	$location.path('/wardrobe');
    }
        
}]);


