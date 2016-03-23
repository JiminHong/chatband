myapp.controller('ChatCtrl', ["$scope", "$firebaseArray", "$location", "$http", "$routeParams", 
function ($scope, $firebaseArray, $location, $http, $routeParams) {
        // It goes to list of chats
        $scope.goChats = function(){
            $location.path('/');
        }

        // It goes to list of gig
        $scope.goGigs = function(){
            $location.path('/listGigs/'+$routeParams.groupId);
        }

        // It goes to list of gig
        $scope.goFiles = function(){
            $location.path('/listFiles');
        }

        // getting a group that has $routeParams.groupId as _id
        $http.get('/api/groups/'+$routeParams.groupId)
            .success(function(data) {
                $scope.songs = data;
                $scope.groupName = data.groupName;
            })
            .error(function(data) {
                console.log('Error: ' + data);
        });

        // It gets all gig database
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
}]);

