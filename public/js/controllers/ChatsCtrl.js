
myapp.controller('ChatsCtrl', ["$scope", "chatMessages", "$firebaseArray", "$location", "$http", "$routeParams", 
function ($scope, chatMessages, $firebaseArray, $location, $http, $routeParams) {
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


