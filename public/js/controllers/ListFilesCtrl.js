myapp.controller('ListFilesCtrl', ["$scope", "$http", "$route", "$location", "$routeParams", 
function ($scope, $http, $route, $location, $routeParams) {

    $scope.search= false;
    //Directs to the chat page
    $scope.goChat = function(){
        $location.path('/chat');
    } 

    $scope.refresh = function(){
        $route.reload();  
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


