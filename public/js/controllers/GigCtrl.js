myapp.controller('GigCtrl', ["$scope", "$http", "$route", "$location", "NgMap",
function ($scope, $http, $route, $location, $NgMap) {

    //google map
    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBjWpBZWjt_nC0iK6n4S3BOUENHZBUjFro";

    $NgMap.getMap().then(function(map) {
        // console.log(map.getCenter());
        // console.log('markers', map.markers);
        // console.log('shapes', map.shapes);
      });

    // Gig name. Using scope db for now.
    $scope.gigName = "moonstone music festival 2016";

    // getting all songs
    $http.get('/api/songs')
        .success(function(data) {
            $scope.songs = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
    });

    // getting all lineups
    $http.get('/api/lineups')
        .success(function(data) {
            $scope.lineups = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
    });

    // getting all data and times
    $http.get('/api/datetimes')
        .success(function(data) {
            $scope.datetimes = data;
                for(i=0; i<data.length; i++){
                    // Month
                    monthNum = Number(data[i].date.charAt(5))+Number(data[i].date.charAt(6));
                    monthNames      = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    data[i].month = monthNames[Number(monthNum)-1];
                    // Date
                    data[i].date = data[i].date.charAt(8)+data[i].date.charAt(9);

                    //Time
                    timeStr = data[i].time;
                    utcTimeHour = timeStr.slice(0, 2);
                    utcTimeMin = timeStr.slice(3, 5);
                    if(Number(utcTimeHour)>12){
                        utcTimeHour = Number(utcTimeHour)-12;
                        $scope.ampm = "PM";
                    }else{
                        $scope.ampm = "AM";
                    };
                    data[i].time = utcTimeHour +":"+ utcTimeMin;
                };
        })
        .error(function(data) {
            console.log('Error: ' + data);
    });

    // Getting a location
    $http.get('/api/locations')
        .success(function(data) {
            $scope.locations = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
    }); 

    // getting all wardrobes
    $http.get('/api/wardrobes')
        .success(function(data) {
            $scope.wardrobes = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
    });


    // using this scope for now.
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    
    // Tabs hover and active.
    if($location.path() === "/songs"){
        $scope.tab = 1;

    }else if($location.path() === "/lineup"){
        $scope.tab = 2;

    }else if($location.path() === "/datetime"){
        $scope.tab = 3;

    }else if($location.path() === "/location"){
        $scope.tab = 4;

    }else if($location.path() === "/wardrobe"){
        $scope.tab = 5;

    }

    $scope.isSet = function(tabNum){
        return $scope.tab === tabNum;
    }

    // It goes to detail page
    $scope.goGig = function(){
        $location.path('/songs');
    }

    // it goes to chat page
    $scope.goChat = function(){
        $location.path('/chat');
    }

    // ===================================================================
    // ============================== Song ===============================
    // ===================================================================

    // Editing song 
    $scope.editSong = function(id){
        //get song by id
        $http.get('/api/songs/' + id)
             .success(function(data){
              $scope.song = data;
              $scope.songId = id;
        })
    } 

    // After getting an id of the certain song and upload it.
    $scope.updateSong = function(id){
        $http.post('/api/songs/'+ id, $scope.song)
             .success(function(data){
                $scope.song = data;
             })
             .finally(function(){
                $route.reload();
             })
    } 

    // Delete a song using id
    $scope.deleteSong = function(id){
        $http.delete('/api/songs/'+ id)
             .success(function(data){
                $scope.song = data;
                console.log("deleted!!");
             })
             .finally(function(){
                $route.reload();
             })
    }

    // ===================================================================
    // ============================ Lineup ===============================
    // ===================================================================

    $scope.editLineup = function(id){
        $http.get('/api/lineups/' + id)
             .success(function(data){
              $scope.lineup = data;
              $scope.commentId = id;
        })
    } 

    $scope.updateLineup = function(id){
        $http.post('/api/lineups/'+ id, $scope.lineup)
             .success(function(data){
                $scope.lineup = data;
                console.log($scope);
             })
             .finally(function(){
                $route.reload();
             })
    }

    $scope.deleteLineup = function(id){
        $http.delete('/api/lineups/'+ id)
             .success(function(data){
                $scope.lineup = data;
                console.log("deleted!!");
             })
             .finally(function(){
                $route.reload();
             })
    } 

    // ===================================================================
    // ============================ Lineup ===============================
    // ===================================================================

    $scope.editDatetime = function(id){
        $http.get('/api/datetimes/' + id)
             .success(function(data){
              $scope.datetime = data;
              $scope.commentId = id;
        })
    } 

    $scope.updateDatetime = function(id){
        $http.post('/api/datetimes/'+ id, $scope.datetime)
             .success(function(data){
                $scope.datetime = data;
                console.log($scope);
             })
             .finally(function(){
                $route.reload();
             })
    }

    $scope.deleteDatetime = function(id){
        $http.delete('/api/datetimes/'+ id)
             .success(function(data){
                $scope.datetime = data;
                console.log("deleted!!");
             })
             .finally(function(){
                $route.reload();
             })
    } 

    // ===================================================================
    // ========================== Wardrobe ===============================
    // ===================================================================

    $scope.editWardrobe = function(id){
        $http.get('/api/wardrobes/' + id)
             .success(function(data){
              $scope.wardrobe = data;
              $scope.commentId = id;
        })
    } 

    $scope.updateWardrobe = function(id){
        $http.post('/api/wardrobes/'+ id, $scope.wardrobe)
             .success(function(data){
                $scope.wardrobe = data;
                console.log($scope);
             })
             .finally(function(){
                $route.reload();
             })
    }

    $scope.deleteWardrobe = function(id){
        $http.delete('/api/wardrobes/'+ id)
             .success(function(data){
                $scope.wardrobe = data;
                console.log("deleted!!");
             })
             .finally(function(){
                $route.reload();
             })
    } 
    
}]);


// Using directives to get tab icons 
myapp.directive('svgIcon', function(){
    function link(scope, element, attrs) {
        function path(icon) {
            return '<svg>' + '<path d="' + icons[icon] + '"/>' + '</svg>';
        }

        function renderSVG() {
            element.html( path(attrs.p) );
        }

        renderSVG();
    }

    return {
        link: link,
        restrict: 'E'
    }
})

var icons = {   
    songs : "M14.5,6.49H1.5a1.5,1.5,0,1,0,0,3h13C15.5,9.49,15.5,6.49,14.5,6.49Z M14.5,13.49H1.5a1.5,1.5,0,0,0,0,3h13C15.5,16.49,15.5,13.49,14.5,13.49Z M14.5,19.49H1.5a1.5,1.5,0,0,0,0,3h13C15.5,22.49,15.5,19.49,14.5,19.49Z M20.51,0.36a1.66,1.66,0,0,0-2.66,1.07L17.56,19.2c0,2.32.21,4.91,0,7.28-3.11-.77-6.79-0.75-8.09,2.74C8,33,11.74,35.62,15.15,34.33A7.51,7.51,0,0,0,19.94,30a1.76,1.76,0,0,0,.56-2.17,38.07,38.07,0,0,0,.28-5L21.06,5.65c2.76,3.21,4.75,7.11,2.29,11.24-1.09,1.83,2,3.12,3,1.32C30.39,11.47,25.3,4.9,20.51.36Z",
    lineup: "M33.35,1.05A3.11,3.11,0,0,0,31,0c-1.12.16-2.23,1.14-3.16,1.73S25.35,3,24.61,3.88s-0.28,2,.11,2.95A72.43,72.43,0,0,0,19,11.38a4.49,4.49,0,0,0-2-2.32c-1.16-.48-2.6.26-3.65,0.73a4.31,4.31,0,0,0-2.52,2,12.49,12.49,0,0,0-.56,3.52l-4.62.72a14.2,14.2,0,0,0-3.95.74C0,17.7,0,20,0,21.74A15.3,15.3,0,0,0,6.86,34.16c3.16,2.1,8.74,3.91,10.82-.49a13.76,13.76,0,0,0,1-3.74c0.11-.73,0-3.11.34-3.59,0.55-.7,3.25-1.27,4.12-1.58l5-1.83a1.35,1.35,0,0,0,.79-2,3.76,3.76,0,0,0-1.88-1.87c-0.79-.38-2.53-0.36-3.48-0.81,1.46-2.5,4-4.86,5.75-7,1-.05,1.87.13,2.69-0.68s1.47-2.73,2.06-3.91c0.47-.94,1.42-2.16,1.38-3.24S34.12,1.65,33.35,1.05ZM31.09,6.74a6.18,6.18,0,0,1-.84,1.68c-0.35.31-.46,0.15-1.13,0.21a1.37,1.37,0,0,0-.64.22,1.07,1.07,0,0,0-1,.45l-4.09,5.06c-0.84,1-2.57,2.44-2.8,3.87-0.39,2.44,2.41,2.45,4.36,3l-4,1.44c-1.23.45-3.11,0.73-4.06,1.76s-0.64,2.62-.76,3.78c-0.29,2.83-.76,6.14-4.47,5.28a12.38,12.38,0,0,1-8.65-8.81,13.43,13.43,0,0,1-.42-3c-0.05-1.91,0-2.31,1.74-2.8a61.69,61.69,0,0,1,7-1.09A1.17,1.17,0,0,0,12,17.58a1.39,1.39,0,0,0,.85-1.13l0.3-2.35c0.13-1,0-1.25,1-1.72,0.36-.18,1.61-0.93,2-0.77a5,5,0,0,1,1,1.8h0a1.36,1.36,0,0,0,2.23,1.32,66.94,66.94,0,0,1,7.32-6A1.38,1.38,0,0,0,27,8.23a1.12,1.12,0,0,0,.5-1.41c-0.15-.42-0.41-1-0.56-1.49,1-.75,2.21-1.33,3.21-2l0.8-.5q0.29-.36.48,0.06a3.23,3.23,0,0,1,1.15.83C32.22,4.78,31.55,5.81,31.09,6.74Z M12.37,25.76c-1,0-1,2.66,0,2.66C15.37,28.42,15.37,25.76,12.37,25.76Z M11.37,28.82a2.13,2.13,0,1,0,0,4.25C13.37,33.07,13.37,28.82,11.37,28.82Z M7.37,28.55c-1,0-1,2.13,0,2.13C9.37,30.68,9.37,28.55,7.37,28.55Z",
    datetime: "M12.32,25.67a2,2,0,0,1-1.49-3.23L15,18.38V7a2,2,0,0,1,4,0V20l-5.45,5.16A1.68,1.68,0,0,1,12.32,25.67Z M17.93,33.7a18.3,18.3,0,0,1-2.59-.19C6.77,32.29.18,25.37,0,17.4A14.84,14.84,0,0,1,4.43,6.29C5.84,4.92,10.86.4,16.08,0H16.3c4,0.37,8.62,1.1,11.89,5.11,2.68,3.29,3.93,8,3.5,13.23-0.41,5-1.86,8.93-4.3,11.61A12.56,12.56,0,0,1,17.93,33.7Zm-1.75-31c-3.41.31-7.34,3-9.89,5.53a12.2,12.2,0,0,0-3.62,9.14c0.14,6.67,5.76,12.49,13,13.53,1.92,0.27,6.71.56,9.71-2.72,2.54-2.77,3.37-7,3.61-10h0c0.37-4.55-.66-8.58-2.91-11.33S20.58,3.09,16.18,2.68Z",
    location: "M9.91,0C2.71,0.41-.14,7.13,0,13.53,0.19,21.89,5.62,29,9.63,35.94a1.59,1.59,0,0,0,2.24.59,1.38,1.38,0,0,0,1.65-.83c3.31-7.07,7.24-14.88,7.42-22.85C21.09,6.36,17.09-.38,9.91,0Zm7.18,16.49a71.52,71.52,0,0,1-5.68,15.69L7.92,26.13C6.42,23.52,4.78,20.94,4,18,2.65,12.86,2.93,4.1,9.82,3.43,17,2.74,18.15,11.28,17.09,16.51Z M12.64,8.26a1.44,1.44,0,0,0-1.09,0c-5.62-.81-7.92,10.05-1.6,10.4C15.17,18.92,17.72,10.26,12.64,8.26ZM12,13a2.64,2.64,0,0,1-1.38,2.14c-2.09.68-.78-3.87,0.4-3.6a1.74,1.74,0,0,0,.78,0A2,2,0,0,1,12,13Z",
    wardrobe: "M35.67,3.76c-0.29-1.54-.43-3.15-2.16-3.61S29.6,0.38,28,1a13.59,13.59,0,0,0-4.38,2.85c-0.76.74-1.3,1.84-2.26,2.3a6.83,6.83,0,0,1-3.11.19L17,6.28a1.69,1.69,0,0,0-.64-0.92A23,23,0,0,0,1.66.84,1.66,1.66,0,0,0,0,2.49l1,8A36.11,36.11,0,0,0,2,17c1.17,3.7,4.65,5.24,8.12,3.37,1.79-1,2.93-2.68,4.6-3.78a9,9,0,0,1,7.6-.5c2,0.95,3.58,2.27,5.8,2.85a33.46,33.46,0,0,0,7.15.83,1.67,1.67,0,0,0,1.65-1.65A70.88,70.88,0,0,0,35.67,3.76Zm-22,9.58C11.35,14.59,6.61,21.1,5,15.82,4,12.18,3.84,8,3.48,4.14A20,20,0,0,1,13.93,7.63a3.84,3.84,0,0,0-.29,1.5,15.66,15.66,0,0,0-2.3.25,1.66,1.66,0,0,0-1.15,2,1.68,1.68,0,0,0,2,1.15,9.92,9.92,0,0,1,1.8-.15c0,0.26.07,0.5,0.1,0.73Zm3.64-1.06-0.15-1.65-0.09-1L20,9.69c0,0.85,0,1.69.12,2.53A14.05,14.05,0,0,0,17.33,12.28Zm11.25,3.4c-1.83-.55-3.15-1.71-4.81-2.54L23.51,13c0-.28-0.06-0.7-0.08-1,0,0,.09-0.13.13-0.13h2.12a1.51,1.51,0,1,0,0-3H23.55c-0.08,0-1,0-1,0V8.88c1-.92,2.55-2.41,4-3.51a11.5,11.5,0,0,1,2.35-1.25c0.74-.32,1.8-0.34,2.49-0.69,1-.48.7-0.44,0.94,0.77,0.17,0.86.34,1.72,0.48,2.59a65.13,65.13,0,0,1,.74,9.62A21.1,21.1,0,0,1,28.57,15.68Z"
};



