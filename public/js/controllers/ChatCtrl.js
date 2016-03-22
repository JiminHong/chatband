myapp.factory("chatMessages", ["$firebaseArray",
  function($firebaseArray) {    
    var ref = new Firebase("https://vivid-fire-4911.firebaseio.com/");
    // this uses AngularFire to create the synchronized array
    return $firebaseArray(ref);
  }
]);


myapp.controller('ChatCtrl', ["$scope", "chatMessages", "$firebaseArray", "$location", "$http", "$routeParams", 
function ($scope, chatMessages, $firebaseArray, $location, $http, $routeParams) {

    // For now,
    // I have user database here
    // It randomly picks user when user sends a message
        var randomNum = Math.round(Math.random() * 2);

        // if you need random : profileImages[randomNum]
        $scope.profilePic = "/img/profile_pics/user.jpg";
        
        // random user would be : usernames[randomNum]
        $scope.user = "me";

        // we add chatMessages array to the scope to be used in our ng-repeat
        $scope.messages = chatMessages;

        // a method to create new messages; called by ng-submit
        $scope.addMessage = function() {
          // calling $add on a synchronized array is like Array.push(),
          // except that it saves the changes to our database!
          $scope.messages.$add({
            senderUsername: $scope.user,
            message: $scope.message, 
            senderProfilePic: $scope.profilePic
          });

          // reset the message input
          $scope.message = "";
        };

        // if the messages are empty
        $scope.messages.$loaded(function() {
          if ($scope.messages.length === 0) {
            $scope.messages.$add({
              senderUsername: "John",
              message: "Hello guys!",
              senderProfilePic: "/img/profile_pics/pug.jpg"
            });
          }
        });

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

        $scope.group = "Awesome Group";

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
