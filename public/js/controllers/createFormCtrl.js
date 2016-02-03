myapp.controller('CreateFormCtrl', ["$scope", "$http", "$firebaseArray", "$location", "$routeParams", 
	function ($scope, $http, $firebaseArray, $location, $routeParams){
	console.log('createFormCtrl fired');

	var ref = new Firebase("https://amber-fire-1000.firebaseio.com/");
	$scope.users = $firebaseArray(ref);

	$scope.postComment = function(){
		console.log("Adding data", $scope.newComment);

		$scope.users.$add({
			author: 	$scope.newComment.author,
			comment: 	$scope.newComment.comment
		})
	}

	$scope.removeComment = function(obj){
		$scope.users.$remove(obj).then(function(ref){
			ref.key() === obj.$id;
		})
	}

	$scope.goUpdateForm = function(obj, index){
		$scope.UpdateData = obj;
		$scope.UpdateDataIndex = index;

		console.log("$scope.UpdateData",$scope.UpdateData);
		console.log("$scope.UpdateDataIndex",$scope.UpdateDataIndex);
		$location.path("/updateForm/"+$scope.UpdateDataIndex);
	}

}])
