myapp.controller('ChatCtrl', ["$scope", "$location", "$http", "$routeParams", 
function ($scope, $location, $http, $routeParams) {
        //Use it when you want to console.log a current path
        $scope.currentPath = $location.path();

        // It goes to list of chats
        $scope.goChats = function(){
            $location.path('/');
        }

        // It goes to list of gig
        $scope.goGigs = function(){
            $location.path('/listGigs');
        }

        // It gets you to the detail page
        $scope.goSongs = function(){
            $location.path('/songs');
        }

        $scope.newMessage = function(){
            $http.post('/api/chats', $scope.newChat)
            .success(function(data) {
                    $scope.chats = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });;
        }

        $http.get('/api/chats')
            .success(function(data) {
                $scope.chats = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
        });

        $scope.group = "Awesome Group";

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
