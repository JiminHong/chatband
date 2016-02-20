myapp.controller('AddChatCtrl', ["$scope", "http", "$location", "$routeParams", 
function ($scope, $http, $location, $routeParams) {
        
        $scope.newChat = {};
        // ===================================================================
        // ============================= addChat =============================
        // ===================================================================
        $http.get('/api/chats')
            .success(function(data) {
                $scope.chats = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

        $scope.createChat = function() {
            $http.post('/api/chats', $scope.newChat)
                .success(function(data) {
                    $scope.newChat = {}; // clear the form so our user is ready to enter another
                    $scope.chats = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };

        $scope.deleteSong = function(id) {
            $http.delete('/api/chats/' + id)
                .success(function(data) {
                    $scope.chats = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };


} ])
        