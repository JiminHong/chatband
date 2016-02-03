myapp.controller('ChatCtrl', ["$scope", "$firebaseArray", "$firebaseAuth", "$location", "$routeParams", 
function ($scope, $firebaseArray, $firebaseAuth, $location, $routeParams) {
    console.log('ChatCtrl fired');


    var ref = new Firebase("https://amber-fire-1000.firebaseio.com/", "sample");
    $scope.authObj = $firebaseAuth(ref);

    // ================================================================================
    // ------------------------------------ onAuth ------------------------------------
    // ================================================================================
    // any time auth status updates, add the user data to scope
    $scope.authObj.$onAuth(function(authData) {
        $scope.authData = authData;        
        if(authData.password != null){
            $scope.chatUsername = authData.password.email;
        }else if (authData.facebook != null){
            $scope.chatUsername = authData.facebook.displayName;
        }else{
            $scope.chatUsername = authData.google.displayName;
        } 

    // ------------------------------- Adding messages --------------------------------
        $scope.messages = $firebaseArray(ref.limit(15));
        $scope.addMessage = function() {
            $scope.messages.$add({
                from: $scope.chatUsername, 
                content: $scope.message
            });
        $scope.message = "";
        }
    });

    // ================================================================================
    // ----------------------------------- Querying -----------------------------------
    // ================================================================================
    var testGroupRef    = new Firebase("https://amber-fire-1000.firebaseio.com/-K2ta5RFf5AqEURLtsD1")
    .startAt('jhong@gmail.com')
    .endAt('jhong@gmail.com')
    .once('value', show)

    function show(snap) {
        $('pre').text(JSON.stringify(snap.val(), null, 2))
    }

    // ================================================================================
    // ------------------------------- Creating groups --------------------------------
    // ================================================================================
    var groupRef    = new Firebase("https://amber-fire-1000.firebaseio.com/");
    $scope.groups   = $firebaseArray(groupRef);

    $scope.createGroup = function(){
        console.log("This is the one who created the group:::: ", $scope.chatUsername);
        $scope.groups.$add({
            newGroupOwner   : $scope.chatUsername,
            newGroupName    : $scope.groups.groupName,
            newGroupPassword: $scope.groups.groupPassword
        });
        $scope.messages = "";
    }

    // ================================================================================
    // ------------------------------- Enter the group --------------------------------
    // ================================================================================
    $scope.enterGroupChat = function($scope, newGroupName, newGroupPassword){

        $scope.groupTitle   = $scope.newGroupName;
        $scope.groupId      = $scope.$id; 
        $scope.newGroupPasswordAuth = prompt("Enter the password for " + $scope.newGroupName, "Enter the password")
        
        if ($scope.newGroupPasswordAuth === $scope.newGroupPassword){
            $location.path('/groupChat/'+ $scope.$id);
        }else{
            alert("wrong")
            $scope.newGroupPasswordAuth = prompt("Re enter your password")
        }
    }

    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: AuthLogout

        //Logout with Facebook 
        $scope.logout = function() {
            $scope.authObj.$unauth();
            console.log("Logout", $scope.authObj);
            $location.path('/');
        }

        //Directs to Creating form page
        $scope.goCreateForm = function(){
            $location.path('/createForm');
        }

        //Directs to the chat page
        $scope.goChat = function(){
            $location.path('/chat');
        } 

        
}]);


