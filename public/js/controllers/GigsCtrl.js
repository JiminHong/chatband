myapp.directive('songsPage', function(){
    return{
        restrict : 'A',
        templateUrl: '../views/gigTabs/songs.html'
    }
})

myapp.directive('lineupPage', function(){
    return{
        restrict : 'A',
        templateUrl: '../views/gigTabs/lineup.html'
    }
})

myapp.directive('datetimePage', function(){
    return{
        restrict : 'A',
        templateUrl: '../views/gigTabs/datetime.html'
    }
})

myapp.directive('locationPage', function(){
    return{
        restrict : 'A',
        templateUrl: '../views/gigTabs/location.html'
    }
})

myapp.directive('wardrobePage', function(){
    return{
        restrict : 'A',
        templateUrl: '../views/gigTabs/wardrobe.html'
    }
})

myapp.controller('GigsCtrl', ["$scope","$location",
function ($scope, $location) {
    console.log('GigsCtrl fired');

    $scope.tab = 1;

    $scope.setTab = function(newTab){
        $scope.tab = newTab;
    }

    $scope.isSet = function(tabNum){
        return $scope.tab === tabNum;
    }

    $scope.goGig = function(){
    	$location.path('/songs');
    }

    //Directs to the chat page
    $scope.goChat = function(){
        $location.path('/chat');
    }   
    
}]);


