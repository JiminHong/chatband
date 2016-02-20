myapp.controller('AddChatCtrl', ["$scope", "$location", "$routeParams", 
function ($scope, $location, $routeParams) {
    console.log('AddChatCtrl fired');

    $scope.createChat = function(){
        console.log("this is createChat")
    }
}
        
}]);


