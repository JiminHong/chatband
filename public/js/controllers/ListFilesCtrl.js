myapp.controller('ListFilesCtrl', ["$scope", "$http", "$location", "$routeParams", 
function ($scope, $http, $location, $routeParams) {

    $scope.search= false;
    //Directs to the chat page
    $scope.goChat = function(){
        $location.path('/chat');
    } 

    // getting all files
    $http.get('/api/files')
        .success(function(data) {
            $scope.file = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
    });

}]);


