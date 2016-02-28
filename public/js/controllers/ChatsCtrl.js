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
            groupPic:""
        }
        ,
        {
            groupName:"My Band",
            lastMessage:"It was great! I hope to see you guys again soon. ",
            lastMessageTime:"7:13PM",
            groupPic:""
        },
        {
            groupName:"Cat Band",
            lastMessage:"Have you guys signed up for the gig?",
            lastMessageTime:"5:00PM",
            groupPic:""
        },
        {
            groupName:"BigBang",
            lastMessage:"Have you talked to them yet?",
            lastMessageTime:"2:15PM",
            groupPic:""
        },
        {
            groupName:"Hello Band",
            lastMessage:"Thanks",
            lastMessageTime:"2 days ago",
            groupPic:""
        }
        ]

        $scope.opts = {
          disable: 'right'
        };
        
}]);


