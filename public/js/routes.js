var myapp = angular.module('myapp', ['ngMap','ngRoute', 'ui.bootstrap', 'ngAnimate','ngTouch','snap'])

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
		templateUrl : 'views/chats.html',
		controller 	: 'ChatsCtrl', function($scope, $http){

		}
	})
	.when('/chat', {
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

	// ======================================================== Gig info

	.when('/songs', {
		templateUrl : 'views/gigTabs/songs.html',
		controller 	: 'GigCtrl', function($scope, $http){

		}
	})
	.when('/goUpdateSong/:songId', {
		//its gonna load this page and run this controller.
		templateUrl : 'views/updateSongForm.html',
		controller 	: 'NewGigCtrl', function($scope, $http){
			
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

	.when('/goAddGig', {
		templateUrl : 'views/addGig.html',
		controller 	: 'NewGigCtrl', function($scope, $http){

		}
	})
	
})




