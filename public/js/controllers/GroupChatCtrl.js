myapp.controller('GroupChatCtrl', ["$scope", "$routeParams", "$firebaseObject", "$firebaseArray", "$firebaseAuth",
	function ($scope, $routeParams, $firebaseObject, $firebaseArray, $firebaseAuth){

		var ref 			= new Firebase("https://amber-fire-1000.firebaseio.com/"+$routeParams.groupId);
		var authRef 		= new Firebase("https://amber-fire-1000.firebaseio.com/","sample");

		$scope.theGroup 	= $firebaseObject(ref);
		$scope.authObj 		= $firebaseAuth(authRef);

		$scope.authObj.$onAuth(function(authData) {

	    	$scope.authData = authData;
	    	// If local login? 
	    	if(authData.password != null){
	            $scope.chatUsername = authData.password.email;
	        // Facebook login?
	        }else if (authData.facebook != null){
	            $scope.chatUsername = authData.facebook.displayName;
	        // Google login?
	        }else{
	            $scope.chatUsername = authData.google.displayName;
	        }

		// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: Adding messages
	        $scope.messages = $firebaseArray(ref.limit(15));
	        $scope.addMessage = function() {
	            $scope.messages.$add({
	                from: $scope.chatUsername, 
	                content: $scope.groupMessage
	            });
	        	$scope.groupMessage = "";
	        }
		// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: Adding members
			$scope.groups = $firebaseArray(ref);
			$scope.addMember = function(){
				$scope.groups.$add({
					memberUsername: $scope.memberUsername
				});
				$scope.memberUsername = "";
			}

			console.log('$scope.groups in groupCtrl', $scope.groups);
	        
    	})

		
}])