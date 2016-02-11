myapp.controller('ChatsCtrl', ["$scope", "$location", "$routeParams", 
function ($scope, $location, $routeParams) {
    console.log('ChatCtrl fired');

        //Directs to the chat page
        $scope.goChat = function(){
            $location.path('/chat');
        } 

        $scope.emails = [

        {
        from:"Troy Davis",
        body: "Evening, at least in Seattle =) I started Papertrail to make great loggin really easy, so if I can save you setup time, tell me a bit about your stack. I wrote https://papertrailapp.com/systems/setup and about half of our docs, so I can usually distill setup to a minute or two."
    	},
    	{
        from:"Trello",
        body: "Hey Jimin, We're ready to activate your account. All we need to do is make sure this is your email address."
    	}
        ]
        
}]);


