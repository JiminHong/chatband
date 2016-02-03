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
		controller 	: 'ChatCtrl', function($scope, $http){

		}
	})
	.when('/chats', {
		templateUrl : 'views/chats.html',
		controller 	: 'ChatsCtrl', function($scope, $http){

		}
	})
	.when('/chat', {
		templateUrl : 'views/chat.html',
		controller 	: 'ChatCtrl', function($scope, $http){

		}
	})
	.when('/gigs', {
		templateUrl : 'views/gigs.html',
		controller 	: 'GigsCtrl', function($scope, $http){

		}
	})
	.when('/songs', {
		templateUrl : 'views/ManagingGigs/songs.html',
		controller 	: 'ManagingGigs', function($scope, $http){

		}
	})
	.when('/lineup', {
		templateUrl : 'views/ManagingGigs/lineup.html',
		controller 	: 'ManagingGigs', function($scope, $http){

		}
	})
	.when('/datetime', {
		templateUrl : 'views/ManagingGigs/datetime.html',
		controller 	: 'ManagingGigs', function($scope, $http){

		}
	})
	.when('/location', {
		templateUrl : 'views/ManagingGigs/location.html',
		controller 	: 'ManagingGigs', function($scope, $http){

		}
	})
	.when('/wardrobe', {
		templateUrl : 'views/ManagingGigs/wardrobe.html',
		controller 	: 'ManagingGigs', function($scope, $http){

		}
	})




})




