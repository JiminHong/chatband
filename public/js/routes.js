var myapp = angular.module('myapp', ['firebase', 'ngMap', 'ngRoute', 'ngAnimate', 'ngTouch', 'snap', 'google.places'])

myapp.config(['$interpolateProvider', function($interpolateProvider){
  // $interpolateProvider used to differentiate uses for angular from express
  $interpolateProvider.startSymbol('{[{'); 
  $interpolateProvider.endSymbol('}]}'); 
}])


myapp.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'views/chats.html',
		controller 	: 'ChatsCtrl', function($scope, $http){

		}
	})
	.when('/goAddGroup', {
		templateUrl : 'views/addGroup.html',
		controller 	: 'AddGroupCtrl', function($scope, $http){

		}
	})
	.when('/chat/:groupId', {
		templateUrl : 'views/chat.html',
		controller 	: 'ChatCtrl', function($scope, $http){

		}
	})
	.when('/addChat', {
		templateUrl : 'views/addChat.html',
		controller 	: 'AddChatCtrl', function($scope, $http){

		}
	})
	.when('/listGigs/:groupId', {
		templateUrl : 'views/listGigs.html',
		controller 	: 'ListGigsCtrl', function($scope, $http){

		}
	})
	
	.when('/listFiles', {
		templateUrl : 'views/listFiles.html',
		controller 	: 'ListFilesCtrl', function($scope, $http){

		}
	})

	// ======================================================== Gig info

	// After select a gig
	// Send the gig Id
	.when('/songs/:groupId/:gigId', {
		templateUrl : 'views/gigTabs/songs.html',
		controller 	: 'GigCtrl', function($scope, $http){

		}
	})
	.when('/lineups/:groupId/:gigId', {
		templateUrl : 'views/gigTabs/lineup.html',
		controller 	: 'GigCtrl', function($scope, $http){

		}
	})
	.when('/datetimes/:groupId/:gigId', {
		templateUrl : 'views/gigTabs/datetime.html',
		controller 	: 'GigCtrl', function($scope, $http){

		}
	})
	.when('/locations/:groupId/:gigId', {
		templateUrl : 'views/gigTabs/location.html',
		controller 	: 'GigCtrl', function($scope, $http){

		}
	})
	.when('/wardrobes/:groupId/:gigId', {
		templateUrl : 'views/gigTabs/wardrobe.html',
		controller 	: 'GigCtrl', function($scope, $http){

		}
	})

	// ======================================================== Adding a new gig
	.when('/goAddGigId/:groupId', {
		templateUrl : 'views/addGigId.html',
		controller 	: 'NewGigCtrl', function($scope, $http){

		}
	})
	.when('/goAddGig/:groupId/:gigId', {
		templateUrl : 'views/addGig.html',
		controller 	: 'NewGigCtrl', function($scope, $http){

		}
	})
	
})




