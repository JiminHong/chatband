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

        $scope.username = "Me";
        $scope.group = "Awesome Group";

        $scope.messages = [
            
            {
                profilePic: "/img/profile_pics/pug.jpg",
                message:"Good morning, group.",
                senderUsername: $scope.username,
                recipientUsername: $scope.group,
                time:"9:10"
            },
            {
                profilePic: "/img/profile_pics/pug.jpg",
                message:"Let me know when you guys get up",
                senderUsername: $scope.username,
                recipientUsername: $scope.group,
                time:"9:10"
            },
            {
                profilePic: "/img/profile_pics/matt.jpg",
                message:"Hey John, I just got up. What's up?",
                senderUsername:"Matt",
                recipientUsername:$scope.group,
                time:"9:25"
            },
            {
                profilePic: "/img/profile_pics/pug.jpg",
                message:"Hi Matt, I'm going to upload songs for the gig.",
                senderUsername: $scope.username,
                recipientUsername: $scope.group,
                time:"9:10"
            },
            {
                profilePic: "/img/profile_pics/lorde.jpg",
                message:"Didn't you say you have a video you were going to show us?",
                senderUsername:"Lorde",
                recipientUsername:$scope.group,
                time:"9:27"
            },
            {
                profilePic: "/img/profile_pics/lorde.jpg",
                message:"Wanna watch the video",
                senderUsername:"Lorde",
                recipientUsername:$scope.group,
                time:"9:27"
            },
            {
                profilePic: "/img/profile_pics/pug.jpg",
                message:"Okay, give me a sec.",
                senderUsername:$scope.username,
                recipientUsername: $scope.group,
                time:"9:29"
            }
        ];



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
