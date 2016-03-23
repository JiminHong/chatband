myapp.controller('AddGroupCtrl', ["$scope", "$firebaseArray", "$location", "$http", "$routeParams", 
function ($scope, $firebaseArray, $location, $http, $routeParams) {
    // getting all users
    $http.get('/api/users')
        .success(function(data) {
            $scope.users = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
    });

    $scope.addGroup = function(){
        $http.post('/api/groups', $scope.newGroup)
        .success(function(data) {
                $scope.groups = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });;
    }
}]);

