myapp.factory("chatGroupMessage", ["$firebaseArray", "$routeParams",
  function($firebaseArray, $routeParams) {
    // go to the group chat
    var groupRef = new Firebase("https://vivid-fire-4911.firebaseio.com/");
    
    // this uses AngularFire to create the synchronized array
    return $firebaseArray(groupRef);

  }
]);

myapp.controller('ChatsCtrl', ["$scope", "chatGroupMessage", "$firebaseArray", "$location", "$http", "$routeParams", 
function ($scope, chatGroupMessage, $firebaseArray, $location, $http, $routeParams) {

        //Directs to the chat page
        $scope.goChat = function(groupId){
            $location.path('/chat/'+groupId);
        } 
        // Directs to the page for creating a new group.
        $scope.goAddGroup = function(){
            $location.path('/goAddGroup');
        }

        // getting all groups
        $http.get('/api/groups')
            .success(function(data) {
                $scope.groups = data;
                $scope.lastMessage = [];
                for(i=0; i<data.length; i++){
                    groupId = data[i]._id;
                    var messagesRef = new Firebase("https://vivid-fire-4911.firebaseio.com/" + groupId);
                    //create a query for the most recent 25 messages on the server
                    var query = messagesRef.orderByChild("message").limitToLast(1);
                    // the $firebaseArray service properly handles database queries as well
                    $scope.lastMessage.push (
                        $firebaseArray(query)
                    )  
                    $scope.filteredData = $scope.lastMessage;
                }
            })
            .error(function(data) {
                console.log('Error: ' + data);
        });        

        //Delete a group chat
        $scope.deleteGroup = function(id) {
            $http.delete('/api/groups/' + id)
                .success(function(data) {
                    $scope.groups = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };

        $scope.opts = {
          disable: 'right'
        };
        
}]);


