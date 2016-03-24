myapp.factory("chatMessages", ["$firebaseArray", "$routeParams",
  function($firebaseArray, $routeParams) {
    // go to the group chat
    var ref = new Firebase("https://vivid-fire-4911.firebaseio.com/" + $routeParams.groupId);
    
    // this uses AngularFire to create the synchronized array
    return $firebaseArray(ref);

  }
]);

myapp.controller('ChatCtrl', ["$scope", "chatMessages", "$firebaseObject", "$firebaseArray", "$location", "$http", "$routeParams", 
function ($scope, chatMessages, $firebaseObject, $firebaseArray, $location, $http, $routeParams) {
    // ===================================================================
    // ============================ Chats ===============================
    // =================================================================== 
        
        var messagesRef = new Firebase("https://vivid-fire-4911.firebaseio.com/" + $routeParams.groupId);
        //create a query for the most recent 25 messages on the server
        var query = messagesRef.orderByChild("message").limitToLast(1);
        // the $firebaseArray service properly handles database queries as well
        $scope.lastMessage = $firebaseArray(query);

        $scope.profilePic = "/img/profile_pics/matt.jpg";
        $scope.user = "matt";

        // we add chatMessages array to the scope to be used in our ng-repeat
        $scope.messages = chatMessages;
        
        // a method to create new messages; called by ng-submit
        $scope.addMessage = function() {
            // calling $add on a synchronized array is like Array.push(),
            // except that it saves the changes to our database!
            $scope.messages.$add({
                senderUsername: $scope.user,
                message: $scope.message, 
                senderProfilePic: $scope.profilePic,
                group_id : $routeParams.groupId
            });
            
          // reset the message input
          $scope.message = "";
        };




    // ===================================================================
    // ============================ Routes ===============================
    // ===================================================================        
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
    // ===================================================================
    // ============================ Data =================================
    // =================================================================== 

        // getting a group that has $routeParams.groupId as _id
        $http.get('/api/groups/'+$routeParams.groupId)
            .success(function(data) {
                $scope.groups = data;
                $scope.groupName = data.groupName;
                console.log($scope.groupName);
            })
            .error(function(data) {
                console.log('Error: ' + data);
        });



        // Getting all gigs
        $http.get('/api/gig/'+ $routeParams.groupId)
            .success(function(data) {
                $scope.gigs = data;
                gigMonthObject = {};
                    for(i=0; i<data.length; i++){
                        // Month
                        monthNum = Number(data[i].gigDate.charAt(5))+Number(data[i].gigDate.charAt(6));
                        monthNames      = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        data[i].gigMonth = monthNames[Number(monthNum)-1];
                        // Date
                        data[i].gigDate = data[i].gigDate.charAt(8)+data[i].gigDate.charAt(9);

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
































