myapp.controller('AuthCtrl', ["$scope", "$firebaseAuth", "$firebaseObject", "$location", "$routeParams", 
	function ($scope, $firebaseAuth, $firebaseObject, $location, $routeParams){
		
		var ref = new Firebase("https://amber-fire-1000.firebaseio.com/", "sample");
		$scope.authObj = $firebaseAuth(ref);

		// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: onAuth
		// any time auth status updates, add the user data to scope
	    $scope.authObj.$onAuth(function(authData) {
	      	$scope.authData = authData;
	      	// console.log("THIS IS AUTHDATA",authData);
	    });

        // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: Local
		// Local Login function
		$scope.localLogin = function() {
			console.log("Local login function runs");
			$scope.authObj.$authWithPassword({
				email: $scope.localLoginUser.email,
				password: $scope.localLoginUser.password
			})
			.then(function(authData) {
				console.log("Logged in with ", authData.uid);
				$location.path("/loggedIn");
			})
			.catch(function(error) {
				console.error("Failed", error);
			})
		}

		// Local Register function
		$scope.register = function() {
			//Object of user data after register
			console.log("$scope.authObj :::::", $scope.registerUser);

			//Creating local user with email and password 
			$scope.authObj.$createUser({
				//registerUser ng-model
				email: $scope.registerUser.email,
				password: $scope.registerUser.password
			})
			//Console log unique ID
			.then(function(userData){
				console.log(userData.uid);
				return $scope.authObj.$authWithPassword({
					email: $scope.registerUser.email,
					password: $scope.registerUser.password
				});
			})
			//Then with that authData 
			.then(function(authData) {
				console.log("Logged in as ", authData.uid)
			})
			.catch(function(error) {
				console.error(error);
			})

        };

        // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: Facebook (authWithOAuthPopup)
        //Login with Facebook Oauth
		$scope.loginFacebook = function(obj){
			$scope.authObj.$authWithOAuthPopup("facebook")
			.then(function(authData){
				$scope.authData = authData;
				console.log("authData :::: ",authData.facebook.displayName);
				$location.path("/loggedIn");
			})
			.catch(function(error) {
				console.log(error);
			});
		}
		// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: Google (authWithOAuthRedirect)
		//Login with Google Oauth
		$scope.loginGoogle = function(obj){
			$scope.authObj.$authWithOAuthPopup("google")
			.then(function(authData) {
				$scope.authData = authData;
				console.log("authData Google:::: ",authData);
				$location.path("/loggedIn");
			})
			.then( function(){
				//No calls page direct
			})
			.catch(function(error) {
				console.log(error);
			});
		}
				
		// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: AuthLogout

		//Logout with Facebook 
		$scope.logout = function() {
			$scope.authObj.$unauth();
			console.log("Logout", $scope.authObj);
			$location.path('/');
		}

		//Directs to Creating form page
		$scope.goCreateForm = function(){
			$location.path('/createForm');
		}

		//Directs to the chat page
		$scope.goChat = function(){
			$location.path('/chat');
		} 

}])