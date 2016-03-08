myapp.controller('ChatsCtrl', ["$scope", "$http", "$location", "$routeParams", 
function ($scope, $http, $location, $routeParams) {
    console.log('ChatsCtrl fired');

        //Directs to the chat page
        $scope.goChat = function(){
            $location.path('/chat');
        } 

        $scope.goAddChat = function(){
            $location.path('/addChat');
        }

        // $http.get('/api/groups')
        //     .success(function(data) {
        //         $scope.groups = data;
        //     })
        //     .error(function(data) {
        //         console.log('Error: ' + data);
        // });

        $scope.deleteGroup = function(id) {
            $http.delete('/api/groups/' + id)
                .success(function(data) {
                    $scope.groups = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };

        $scope.groups = [
        {
            groupName:"Awesome Band",
            lastMessage:"Okay give me a sec",
            lastMessageTime:"7:25PM",
            groupPic:"/img/bands/band1.jpg",
            headerColor: "#5E5D34"
        }
        ,
        {
            groupName:"My Band",
            lastMessage:"It was great! I hope to see you guys again soon. ",
            lastMessageTime:"7:13PM",
            groupPic:"/img/bands/band2.jpg",
            headerColor: "#4F371F"

        },
        {
            groupName:"Cat Band",
            lastMessage:"Have you guys signed up for the gig?",
            lastMessageTime:"5:00PM",
            groupPic:"/img/bands/band3.jpg"
        }
        ]

        $scope.opts = {
          disable: 'right'
        };
        
}]);


