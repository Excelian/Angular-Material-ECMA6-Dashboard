import angular from 'angular';

export var userModule = angular.module('userModule', []).service('UserService', ['$http','$q',
  function UserService($http,$q) {
    var apiCalls = [];
    for (var x = 0; x < 2; x++) {
      apiCalls.push($http.get('http://api.randomuser.me/'));
    }

    var getCurrentUsers = function(){
      return $q.all(apiCalls);
    };

    var addNewUser = function(){
      return $http.get('http://api.randomuser.me/');
    };

    return {
      getCurrentUsers,
      addNewUser
    };
  }
]);
