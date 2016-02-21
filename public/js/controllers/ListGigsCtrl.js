myapp.controller('ListGigsCtrl', ["$scope", "$location", "$routeParams", 
function ($scope, $location, $routeParams) {

    console.log('ListGigsCtrl fired');

    //Directs to the chat page
    $scope.goChat = function(){
        $location.path('/chat');
    } 

    $scope.goAddGig = function(){
    	$location.path('/goAddGig');
    }

    $scope.goSongs = function(){
        $location.path('/songs');
    }


    $scope.listGigs = [
    {
        date:'Tomorrow',
        time:'18:00-19:00',
        name:'MOONSTONE MUSIC FESTIVAL',
        location:'Central Florida Fairgrounds, Orlando, FL',
        songArtist:'PINK',
        songTitle:'Calling Dr.Love',
        songCount:'3'
    },
    {
        date:'Jan 23',
        time:'14:00-16:00',
        name:'PERFORMING ARTS',
        location:'Dr. Phillips Center, Orlando, FL',
        songArtist:'Led Zeppelin',
        songTitle:'Stairway to ...',
        songCount:'3'
    },
    {
        date:'Feb 5',
        time:'17:00-18:30',
        name:'WAKA FLOCKA FLAME',
        location:'Beacham Theater, Orlando, FL',
        songArtist:'The Beatles',
        songTitle:'Hey Jude',
        songCount:'2'
    },
    {
        date:'Mar 14',
        time:'18:00-19:00',
        name:'WE THE KINGS',
        location:'The Social, Orlando, FL',
        songArtist:'PINK',
        songTitle:'Calling Dr.Love',
        songCount:'2'
    },
    ]
}]);


