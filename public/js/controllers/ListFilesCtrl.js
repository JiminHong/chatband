myapp.controller('ListFilesCtrl', ["$scope", "$http", "$location", "$routeParams", 
function ($scope, $http, $location, $routeParams) {

    $scope.fileviewoptions = ["type", "gigs"];
    $scope.firstOption = $scope.fileviewoptions[0];
    //Directs to the chat page
    $scope.goChat = function(){
        $location.path('/chat');
    } 

    // Directs to th page to add a new gig 
    $scope.goAddGigId = function(){
    	$location.path('/goAddGigId');
    }

    // Goes to the detail page
    $scope.goSongs = function(){
        $location.path('/songs');
    }

    // Create a new gig
    $scope.createGig = function(){
        // If you add just a gigLocation it will add a object now a string. 
        $scope.newGig.gigLocation = $scope.newGig.gigLocation.formatted_address;
        $http.post('/api/gig', $scope.newGig)
        .success(function(data) {
                $scope.newGig.gigLocation = $scope.newGig.gigLocation.formatted_address;
                $scope.gigs = data;
                $location.path('/goAddGig/'+ data._id);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });;
    }

    // Getting all gigs
    $http.get('/api/gig')
        .success(function(data) {
            $scope.gigs = data;
            gigMonthObject = {};
                for(i=0; i<data.length; i++){
                    //Month
                    monthNum = Number(data[i].gigDate.charAt(0)) + Number(data[i].gigDate.charAt(1));
                    monthNames      = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    data[i].gigMonth = monthNames[Number(monthNum)-1];

                    //Date
                    data[i].gigDate = data[i].gigDate.charAt(3)+data[i].gigDate.charAt(4);

                    //Time
                    timeStr = data[i].gigTime;
                    utcTimeHour = timeStr.slice(0, 2);
                    utcTimeMin = timeStr.slice(3, 5);
                    if(Number(utcTimeHour)>12){
                        utcTimeHour = Number(utcTimeHour)-12;
                        $scope.ampm = "PM";
                    }else{
                        $scope.ampm = "AM";
                    };
                    data[i].gigTime = utcTimeHour +":"+ utcTimeMin;
                };
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Delete a gig
    $scope.deleteGig = function(id){
        $http.delete('/api/gig/'+ id)
             .success(function(data){
                $scope.gig = data;
                console.log("deleted!!");
             })
             .finally(function(){
                $route.reload();
                console.log("id : ", id)
             })
    }

}]);


