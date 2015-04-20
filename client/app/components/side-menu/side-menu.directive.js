import angular from 'angular';

import template from './side-menu.template.html!text';
export var sideMenuComponentModule = angular.module('sideMenuComponentModule', []).directive('sideMenu', [
  function sideMenu() {
    return {
      restrict: 'E',
      template: template,
      controller: [
        '$scope', '$mdSidenav','$state', function ($scope, $mdSidenav, $state) {
          $scope.close = function () {
            $mdSidenav('left').close();
          };
          $scope.menuItems= [];
          var menuItems= $state.get();
          menuItems.forEach(i => {
            if(i.hasOwnProperty('title')) {
              $scope.menuItems.push(
                {
                  title: i.title,
                  url: i.url,
                  icon: i.icon
                }
              );
            }
          });
        }],
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {}
    };
  }
]);
