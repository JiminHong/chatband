myapp = angular.module('myapp');

myapp.config(['$interpolateProvider', function($interpolateProvider){
  // $interpolateProvider used to differentiate uses for angular from express
  $interpolateProvider.startSymbol('{[{'); 
  $interpolateProvider.endSymbol('}]}'); 
}])


myapp.config(function ($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		//its gonna load this page and run this controller.
		templateUrl : 'views/chat.html',
		controller 	: 'AuthCtrl', function($scope, $http){

		}
	})
	.when('/createForm', {
		//its gonna load this page and run this controller.
		templateUrl : 'views/createForm.html',
		controller 	: 'CreateFormCtrl', function($scope, $http){

		}
	})
	.when('/updateForm/:userId', {
		//its gonna load this page and run this controller.
		templateUrl : 'views/updateForm.html',
		controller 	: 'FormCtrl', function($scope, $http){
			
		}
	})
	.when('/chat', {
		templateUrl : 'views/chat.html',
		controller 	: 'ChatCtrl', function($scope, $http){

		}
	})
	.when('/loggedIn', {
		templateUrl : 'views/userProfile.html',
		controller	: 'UserProfileCtrl', function($scope, $http){

		}
	})
	.when('/groupChat/:groupId', {
		templateUrl : 'views/groupChat.html',
		controller	: 'GroupChatCtrl', function($scope){
		}
	})

})




