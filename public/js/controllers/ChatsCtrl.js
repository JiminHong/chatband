myapp.controller('ChatsCtrl', ["$scope", "$http", "$location", "$routeParams", 
function ($scope, $http, $location, $routeParams) {

        //Directs to the chat page
        $scope.goChat = function(groupId){
            $location.path('/chat/'+groupId);
        } 

        $scope.goAddChat = function(){
            $location.path('/addChat');
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


