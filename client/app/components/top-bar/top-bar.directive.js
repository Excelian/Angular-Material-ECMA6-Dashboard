import angular from 'angular';

import template from './top-bar.template.html!text';
export var topBarComponentModule = angular.module('topBarComponentModule', [
]).directive('topBar', [
  function siteHeader() {
    return {
      restrict: 'E',
      template: template,
      controller: ['$scope','$rootScope','$state','$mdSidenav',function($scope,$rootScope,$state,$mdSidenav){
        $scope.openRightNav = function(){
          $mdSidenav('left').toggle();
        };
        $rootScope.$on('$stateChangeSuccess',
          function(event, toState, toParams, fromState, fromParams){
            $scope.title = $state.current.title;
          });
        $scope.title = $state.current.title;
      }],
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {

      }
    };
  }
]);
