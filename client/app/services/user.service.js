import angular from 'angular';


class UsersService {

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getCurrentUsers() {
    var deferred = this.$q.defer();
    this.$http.get('http://api.randomuser.me/?results=2', {cache: true})
      .success((data) => {
        deferred.resolve(data.results.map((item) => item.user));
      });
    return deferred.promise;
  }

  addNewUser() {
    var deferred = this.$q.defer();
    this.$http.get('http://api.randomuser.me/')
      .success((data) => {
        deferred.resolve(data.results[0].user);
      });
    return deferred.promise;
  }
}


export var userModule = angular.module('userModule', [])
  .service('UserService', UsersService);
