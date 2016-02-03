myapp.controller('FormCtrl', ["$scope", "$http", "$firebaseObject", "$location", "$routeParams", function ($scope, $http, $firebaseObject, $location, $routeParams){
	console.log('FormCtrl fired');

	var ref = new Firebase("https://amber-fire-1000.firebaseio.com/"+$routeParams.userId);
	$scope.user = $firebaseObject(ref);
	
	
	$scope.updateComment = function(){
		console.log("routeParams (obj)", $routeParams);
		$scope.user.$save().then(function(ref){
			console.log(ref)
		})

		$location.path('/createForm');
	}

}])