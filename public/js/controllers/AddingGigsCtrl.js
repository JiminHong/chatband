myapp.controller('AddingGigsCtrl', ["$scope", "$location", "$routeParams", "$http",
function ($scope, $location, $routeParams, $http) {
    console.log('AddingGigsCtrl fired');

    $http.get('/songslist')

    $scope.newGig = {};
    }
        
]);


