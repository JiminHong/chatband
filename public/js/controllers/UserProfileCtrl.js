myapp
.controller('UserProfileCtrl', ["$scope", "$http", "$firebaseAuth", "$firebaseArray", "$location", "$routeParams", 
	function ($scope, $http, $firebaseAuth, $firebaseArray, $location, $routeParams){

	//user unique id
	// console.log('UserProfileCtrl fired', $routeParams);

	var ref = new Firebase("https://amber-fire-1000.firebaseio.com/", "sample");
	$scope.authObj = $firebaseAuth(ref);

	// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: onAuth
	// any time auth status updates, add the user data to scope
	// Local Login
    $scope.authObj.$onAuth(function(authData) {
      	$scope.authData = authData;
      	 	
    });

	//Directs to the chat page
	$scope.goChat = function(){
		$location.path('/chat');
	}   

}])
