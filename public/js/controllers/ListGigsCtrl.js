myapp.controller('ListGigsCtrl', ["$scope", "$http", "$location", "$routeParams", 
function ($scope, $http, $location, $routeParams) {

    console.log('ListGigsCtrl fired');

    //Directs to the chat page
    $scope.goChat = function(){
        $location.path('/chat');
    } 

    $scope.goAddGigId = function(){
    	$location.path('/goAddGigId');
    }

    $scope.goSongs = function(){
        $location.path('/songs');
    }

    $http.get('/api/gigs')
        .success(function(data) {
            $scope.gigs = data;
            gigMonthObject = {};
            for(i=0;i<data.length;i++){
                // console.log(data[i].gigDate);
                // monthNum = data[i].gigDate.charAt(5)+data[i].gigDate.charAt(6);                
                // $scope.gigData.gigDate = gigMonth;
                for(i=0; i<data.length; i++){
                    //Month
                    monthNum = data[i].gigDate.charAt(5)+data[i].gigDate.charAt(6);
                    monthNames      = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    monthNumIndex   = Number(monthNum)-1;
                    data[i].gigMonth = monthNames[monthNumIndex];
                    //Date
                    dateNum = data[i].gigDate.charAt(8)+data[i].gigDate.charAt(9);
                    data[i].gigDate = dateNum;

                    console.log(data[i].gigTime)
                };
            }

        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $http.get('/api/songs')
        .success(function(data) {
            $scope.songs = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


    // $scope.listGigs = [
    // {
    //     date:'Tomorrow',
    //     time:'18:00-19:00',
    //     name:'MOONSTONE MUSIC FESTIVAL',
    //     location:'Central Florida Fairgrounds, Orlando, FL',
    //     songArtist:'PINK',
    //     songTitle:'Calling Dr.Love',
    //     songCount:'3'
    // },
    // {
    //     date:'Jan 23',
    //     time:'14:00-16:00',
    //     name:'PERFORMING ARTS',
    //     location:'Dr. Phillips Center, Orlando, FL',
    //     songArtist:'Led Zeppelin',
    //     songTitle:'Stairway to ...',
    //     songCount:'3'
    // },
    // {
    //     date:'Feb 5',
    //     time:'17:00-18:30',
    //     name:'WAKA FLOCKA FLAME',
    //     location:'Beacham Theater, Orlando, FL',
    //     songArtist:'The Beatles',
    //     songTitle:'Hey Jude',
    //     songCount:'2'
    // },
    // {
    //     date:'Mar 14',
    //     time:'18:00-19:00',
    //     name:'WE THE KINGS',
    //     location:'The Social, Orlando, FL',
    //     songArtist:'PINK',
    //     songTitle:'Calling Dr.Love',
    //     songCount:'2'
    // },
    // ]
}]);


