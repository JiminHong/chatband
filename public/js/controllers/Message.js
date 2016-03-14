
angular.module('myapp', ['ngResource']).factory('Message', ['$resource', function($resource) {
    'use strict';
    
    var server = $resource('/messages');
    
    return {
        save: function (newMessage) {
            server.save(newMessage);
        },
        
        query: function () {
            return server.query();
        }
    };
}]);