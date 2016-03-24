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

        // getting a group that has $routeParams.groupId as _id
        $http.get('/api/groups')
            .success(function(data) {
                $scope.groups = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
        });


        //Directs to the chat page
        $scope.goChat = function(groupId){
            $location.path('/chat/'+groupId);
        } 
        // Directs to the page for creating a new group.
        $scope.goAddGroup = function(){
            $location.path('/goAddGroup');
        }

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

