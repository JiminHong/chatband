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
	.when('/chat', {
		templateUrl : 'views/chat.html',
		controller 	: 'ChatCtrl', function($scope, $http){

		}
	})
	.when('/addChat', {
		templateUrl : 'views/addChat.html',
		controller 	: 'AddChatCtrl', function($scope, $http){

		}
	})
	.when('/listGigs', {
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
	.when('/songs/:gigId', {
		templateUrl : 'views/gigTabs/songs.html',
		controller 	: 'GigCtrl', function($scope, $http){

		}
	})
	.when('/lineup', {
		templateUrl : 'views/gigTabs/lineup.html',
		controller 	: 'GigCtrl', function($scope, $http){

		}
	})
	.when('/datetime', {
		templateUrl : 'views/gigTabs/datetime.html',
		controller 	: 'GigCtrl', function($scope, $http){

		}
	})
	.when('/location', {
		templateUrl : 'views/gigTabs/location.html',
		controller 	: 'GigCtrl', function($scope, $http){

		}
	})
	.when('/wardrobe', {
		templateUrl : 'views/gigTabs/wardrobe.html',
		controller 	: 'GigCtrl', function($scope, $http){

		}
	})

	// ======================================================== Adding a new gig
	.when('/goAddGigId', {
		templateUrl : 'views/addGigId.html',
		controller 	: 'NewGigCtrl', function($scope, $http){

		}
	})
	.when('/goAddGig/:gigId', {
		templateUrl : 'views/addGig.html',
		controller 	: 'NewGigCtrl', function($scope, $http){

		}
	})
	.when('/goAddGig', {
		templateUrl : 'views/addGig.html',
		controller 	: 'NewGigCtrl', function($scope, $http){

		}
	})
	
})




